// Server-side Auth Store - Uses Firebase Admin SDK
// This handles all secure student authentication and management operations for the International platform.

import { getAdminFirestore } from './firebase-admin';

const STUDENTS_COLLECTION = 'students';
const DEVICE_REQUESTS_COLLECTION = 'device_requests';

export interface Device {
    id: string;
    fingerprint: string;
    name: string;
    type: 'mobile' | 'tablet' | 'desktop' | 'unknown';
    browser: string;
    os: string;
    firstSeen: string;
    lastSeen: string;
    status: 'pending' | 'approved' | 'blocked';
    ipAddress?: string;
}

export interface Student {
    id: string;
    username: string;
    passwordHash: string; // Plain for this pedagogical project, usually hashed
    name: string;
    email?: string;
    grade?: string; // International grade (e.g., Year 10, IB DP1)
    image?: string;
    devices: Device[];
    isActive: boolean;
    isAdmin?: boolean;
    role?: 'admin' | 'moderator' | 'student';
    createdAt: string;
    lastLogin?: string;
    xp?: number;
    level?: number;
}

export interface DeviceRequest {
    id: string;
    studentId: string;
    studentName: string;
    device: Device;
    requestedAt: string;
    status: 'pending' | 'approved' | 'rejected';
}

export interface LoginResult {
    success: boolean;
    error?: string;
    student?: Student;
    requiresDeviceApproval?: boolean;
    deviceRequestId?: string;
}

function getDB() {
    return getAdminFirestore();
}

// ============ Admin Initialization ============

// Hardcoded Sovereign Admins (Fallback)
const ADMIN_EMAILS = ['h75jbr@gmail.com'];

/**
 * Ensures the super admin h75jbr@gmail.com exists with full sovereignty.
 */
export async function initializeAdmin() {
    try {
        const db = getDB();
        const adminEmail = 'h75jbr@gmail.com';
        const adminId = 'super-admin-main';
        
        const adminSnap = await db.collection(STUDENTS_COLLECTION)
            .where('email', '==', adminEmail)
            .limit(1)
            .get();

        if (adminSnap.empty) {
            console.log(`[AdminInit] Initializing Super Admin: ${adminEmail}`);
            const superAdmin: Student = {
                id: adminId,
                username: 'hazim_admin',
                passwordHash: 'H1975jbr', // Default secure pass as requested
                name: 'Hazim Jaber',
                email: adminEmail,
                grade: 'System Admin',
                image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Hazim`,
                devices: [],
                isActive: true,
                isAdmin: true,
                role: 'admin',
                createdAt: new Date().toISOString(),
                xp: 99999,
                level: 100
            };
            await db.collection(STUDENTS_COLLECTION).doc(adminId).set(superAdmin);
            console.log('[AdminInit] Super Admin created successfully.');
        } else {
            // Ensure the existing doc has admin rights
            const doc = adminSnap.docs[0];
            if (!doc.data().isAdmin) {
                await doc.ref.update({ isAdmin: true, role: 'admin' });
                console.log('[AdminInit] Sovereignty restored to admin email.');
            }
        }
    } catch (e) {
        console.error('[AdminInit] Failed to initialize admin:', e);
    }
}

// ============ Authentication Logic ============

export interface UserSession {
    id: string;
    username?: string;
    name: string;
    email?: string;
    isAdmin: boolean;
    role: 'admin' | 'moderator' | 'student';
    grade?: string;
    image?: string;
}

/**
 * Verify a secure session cookie
 */
export async function verifySession(sessionCookie?: string): Promise<UserSession | null> {
    if (!sessionCookie) return null;

    try {
        const decoded = decodeURIComponent(sessionCookie);
        const session = JSON.parse(decoded) as UserSession;
        
        if (!session.id) return null;
        
        // --- Multi-Layer Admin Check ---
        let isAdmin = session.isAdmin;
        let role = session.role;

        // 1. Direct check for Super Admin email (Hardcoded)
        if (session.email && ADMIN_EMAILS.includes(session.email.toLowerCase())) {
            isAdmin = true;
            role = 'admin';
        }

        // 2. Check the user-created 'admin' collection in Firestore (Manual sovereignty)
        if (!isAdmin && session.email) {
            const db = getDB();
            const adminDoc = await db.collection('admin').doc(session.email.toLowerCase()).get();
            if (adminDoc.exists && adminDoc.data()?.role === 'admin') {
                isAdmin = true;
                role = 'admin';
            }
        }

        return { ...session, isAdmin, role };
    } catch (error) {
        return null;
    }
}

export async function authenticateStudent(
    usernameInput: string,
    passwordInput: string,
    deviceFingerprint: string,
    deviceInfo: Partial<Device>
): Promise<LoginResult> {
    const db = getDB();
    const username = usernameInput.trim().toLowerCase();

    // 1. Find the student
    let studentSnap = await db.collection(STUDENTS_COLLECTION).where('username', '==', username).limit(1).get();
    
    // Fallback search by email
    if (studentSnap.empty && username.includes('@')) {
        studentSnap = await db.collection(STUDENTS_COLLECTION).where('email', '==', username).limit(1).get();
    }

    if (studentSnap.empty) {
        return { success: false, error: 'User not found' };
    }

    const studentDoc = studentSnap.docs[0];
    const student = studentDoc.data() as Student;

    // 2. Validate Password
    if (student.passwordHash !== passwordInput) {
        return { success: false, error: 'Invalid password' };
    }

    if (!student.isActive) {
        return { success: false, error: 'Your account is suspended. Please contact management.' };
    }

    const now = new Date().toISOString();
    const currentDevices = student.devices || [];

    // 3. Admin Security Bypass
    if (student.isAdmin) {
        let device = currentDevices.find(d => d.fingerprint === deviceFingerprint);
        if (!device) {
            device = {
                id: `adm-${Date.now()}`,
                fingerprint: deviceFingerprint,
                name: deviceInfo.name || 'Admin Device',
                type: deviceInfo.type || 'desktop',
                browser: deviceInfo.browser || 'Browser',
                os: deviceInfo.os || 'OS',
                firstSeen: now,
                lastSeen: now,
                status: 'approved',
                ipAddress: deviceInfo.ipAddress
            };
            currentDevices.push(device);
        } else {
            device.lastSeen = now;
        }

        await studentDoc.ref.update({ lastLogin: now, devices: currentDevices });
        return { success: true, student: { ...student, devices: currentDevices } };
    }

    // 4. Regular Student Device Logic
    const existingDevice = currentDevices.find(d => d.fingerprint === deviceFingerprint);

    if (existingDevice) {
        if (existingDevice.status === 'blocked') {
            return { success: false, error: 'This device is blocked' };
        }
        if (existingDevice.status === 'pending') {
            return { success: false, error: 'Device pending approval', requiresDeviceApproval: true };
        }
        
        // Approved device, proceed
        existingDevice.lastSeen = now;
        await studentDoc.ref.update({ lastLogin: now, devices: currentDevices });
        return { success: true, student: { ...student, devices: currentDevices } };
    }

    // 5. Register New Device Attempt
    const requestId = `req_${Date.now()}`;
    const newDevice: Device = {
        id: requestId,
        fingerprint: deviceFingerprint,
        name: deviceInfo.name || 'Unknown Device',
        type: deviceInfo.type || 'unknown',
        browser: deviceInfo.browser || 'Unknown',
        os: deviceInfo.os || 'Unknown',
        firstSeen: now,
        lastSeen: now,
        status: 'pending',
        ipAddress: deviceInfo.ipAddress
    };

    currentDevices.push(newDevice);
    await studentDoc.ref.update({ devices: currentDevices });

    // Store a separate request for the Admin list
    const request: DeviceRequest = {
        id: requestId,
        studentId: student.id,
        studentName: student.name,
        device: newDevice,
        requestedAt: now,
        status: 'pending'
    };
    await db.collection(DEVICE_REQUESTS_COLLECTION).doc(requestId).set(request);

    return {
        success: false,
        error: 'New device detected. Pending management approval.',
        requiresDeviceApproval: true,
        deviceRequestId: requestId
    };
}

// ============ Student Management ============

export async function createStudent(data: {
    username: string;
    passwordHash: string;
    name: string;
    email?: string;
    grade: string;
}) {
    const db = getDB();
    const username = data.username.trim().toLowerCase();
    
    // Check uniqueness
    const existingSnap = await db.collection(STUDENTS_COLLECTION).where('username', '==', username).get();
    if (!existingSnap.empty) {
        return { success: false, error: 'Username already taken' };
    }

    const id = `std_${Date.now()}`;
    const newStudent: Student = {
        id,
        username,
        passwordHash: data.passwordHash,
        name: data.name,
        email: data.email || '',
        grade: data.grade,
        image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        devices: [],
        isActive: true,
        createdAt: new Date().toISOString(),
        xp: 0,
        level: 1,
        role: 'student'
    };

    await db.collection(STUDENTS_COLLECTION).doc(id).set(newStudent);
    return { success: true, student: newStudent };
}

export async function getAllStudents(): Promise<Student[]> {
    const db = getDB();
    const snap = await db.collection(STUDENTS_COLLECTION).get();
    return snap.docs.map(doc => doc.data() as Student);
}

export async function getStudentById(id: string): Promise<Student | undefined> {
    const db = getDB();
    const snap = await db.collection(STUDENTS_COLLECTION).doc(id).get();
    return snap.exists ? (snap.data() as Student) : undefined;
}
