'use client';

import React, { useEffect, useState, Suspense, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
    Users, 
    Smartphone, 
    BookOpen, 
    ShieldAlert,
    Activity,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock,
    Copy,
    Check,
    Shield
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function AdminContent() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'overview';
    
    const setActiveTab = (tab: string) => {
        router.push(`/admin?tab=${tab}`);
    };
    
    // --- Student Creation State ---
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        grade: 'cie-igcse',
        email: '',
        phone: '',
        notes: '',
        role: 'student' as 'student' | 'moderator'
    });
    const [createdCredentials, setCreatedCredentials] = useState<{ username: string; password?: string } | null>(null);
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

    const handleCreateStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        setStatus({ type: null, msg: '' });
        setCreatedCredentials(null);

        try {
            const res = await fetch('/api/auth/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    username: formData.username || undefined,
                    password: formData.password || undefined,
                    grade: formData.grade,
                    email: formData.email,
                    phone: formData.phone,
                    notes: formData.notes,
                    role: formData.role
                })
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', msg: `Student account created successfully!` });
                setCreatedCredentials(data.credentials);
                setFormData({
                    name: '',
                    username: '',
                    password: '',
                    grade: 'cie-igcse',
                    email: '',
                    phone: '',
                    notes: '',
                    role: 'student'
                });
            } else {
                setStatus({ type: 'error', msg: data.error || 'Failed to create student' });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'Network error. Try again.' });
        } finally {
            setIsCreating(false);
        }
    };
    const [deviceRequests, setDeviceRequests] = useState<any[]>([]);
    const [isLoadingDevices, setIsLoadingDevices] = useState(false);
    const [authStats, setAuthStats] = useState<{ totalStudents: number; activeStudents: number; pendingDevices: number } | null>(null);
    const [students, setStudents] = useState<any[]>([]);
    const [isLoadingStudents, setIsLoadingStudents] = useState(false);
    const [studentSearch, setStudentSearch] = useState('');

    const fetchStudents = useCallback(async () => {
        setIsLoadingStudents(true);
        try {
            const res = await fetch('/api/admin/students');
            const data = await res.json();
            if (data.success) {
                setStudents(data.students || []);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingStudents(false);
        }
    }, []);

    const handleStudentAction = async (action: 'toggle-active' | 'delete', studentId: string) => {
        if (action === 'delete' && !confirm('Are you sure you want to delete this student account? This action cannot be undone.')) {
            return;
        }
        try {
            const res = await fetch('/api/admin/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, studentId })
            });
            const data = await res.json();
            if (data.success) {
                fetchStudents();
                fetchDevices();
            } else {
                alert(data.error || 'Failed to execute action');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        }
    };

    const fetchDevices = useCallback(async () => {
        setIsLoadingDevices(true);
        try {
            const res = await fetch('/api/admin/devices');
            const data = await res.json();
            if (data.success) {
                setDeviceRequests(data.requests || []);
                setAuthStats(data.stats || null);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingDevices(false);
        }
    }, []);

    const handleDeviceAction = async (action: string, requestId: string) => {
        try {
            const res = await fetch('/api/admin/devices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, requestId })
            });
            const data = await res.json();
            if (data.success) {
                fetchDevices();
            } else {
                alert(data.error || 'Failed to perform action');
            }
        } catch (e) {
            console.error(e);
            alert('Connection error');
        }
    };

    useEffect(() => {
        if (!isLoading && (!user?.isAdmin)) {
            router.push('/dashboard');
        }
    }, [user, isLoading, router]);

    useEffect(() => {
        if (user?.isAdmin) {
            fetchDevices();
            if (activeTab === 'students') {
                fetchStudents();
            }
        }
    }, [activeTab, user, fetchDevices, fetchStudents]);

    if (isLoading || !user?.isAdmin) {
        return (
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    const stats = [
        { label: 'Total Students', value: authStats ? String(authStats.totalStudents) : '0', icon: Users, color: 'text-blue-400', tab: 'students' },
        { label: 'Active Today', value: authStats ? String(authStats.activeStudents) : '0', icon: Activity, color: 'text-emerald-400', tab: 'overview' },
        { label: 'Pending Devices', value: authStats ? String(authStats.pendingDevices) : '0', icon: Smartphone, color: 'text-amber-400', tab: 'devices' },
        { label: 'Security Alerts', value: 'None', icon: ShieldAlert, color: 'text-rose-400', tab: 'devices' },
    ];

    return (
        <div className="min-h-screen bg-[#050510] text-white font-sans p-6 lg:p-12">
            <div className="max-w-7xl mx-auto space-y-10">
                
                {/* Admin Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-emerald-400 text-sm font-bold uppercase tracking-widest">
                            <ShieldAlert className="w-4 h-4" />
                            Admin Sovereign Access
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight">System Control</h1>
                        <p className="text-slate-500 font-medium">Welcome back, Master Hazim. The platform is secure.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Link 
                            href="/dashboard" 
                            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm"
                        >
                            ← Back to Dashboard
                        </Link>
                        
                        <div className="flex bg-white/5 border border-white/10 p-1 rounded-2xl">
                            {['overview', 'students', 'devices'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`
                                        px-6 py-2.5 rounded-xl font-bold text-sm transition-all capitalize
                                        ${activeTab === tab 
                                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
                                            : 'text-slate-400 hover:text-white'}
                                    `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div 
                            key={i} 
                            onClick={() => setActiveTab(stat.tab)}
                            className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all group cursor-pointer active:scale-98"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <MoreVertical className="w-5 h-5 text-slate-700 hover:text-white" />
                            </div>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-2xl font-black">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Main Control Panel Area */}
                <div className="grid lg:grid-cols-3 gap-10">
                    
                    {/* Management Table / List placeholder */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] overflow-hidden">
                            <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h3 className="text-xl font-bold">
                                    {activeTab === 'students' ? 'Student Management' : 
                                     activeTab === 'devices' ? 'Device Security Requests' : 
                                     'Recent Platform Activity'}
                                </h3>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        value={studentSearch}
                                        onChange={e => setStudentSearch(e.target.value)}
                                        className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:border-indigo-500 outline-none w-full md:w-64 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="p-8">
                                {activeTab === 'students' ? (
                                    <div className="space-y-8 animate-in fade-in duration-500">
                                        <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-3xl">
                                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                                                <Users className="w-5 h-5 text-indigo-400" />
                                                Create New Student
                                            </h4>
                                            <form onSubmit={handleCreateStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                 <div className="flex flex-col gap-1.5 md:col-span-2">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Full Name *</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="e.g. John Doe" 
                                                         required
                                                         value={formData.name}
                                                         onChange={e => setFormData({...formData, name: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Username (Optional)</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="Auto-generated if left blank" 
                                                         value={formData.username}
                                                         onChange={e => setFormData({...formData, username: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Password (Optional)</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="Auto-generated if left blank" 
                                                         value={formData.password}
                                                         onChange={e => setFormData({...formData, password: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Curriculum / Track *</label>
                                                     <select 
                                                         value={formData.grade}
                                                         onChange={e => setFormData({...formData, grade: e.target.value})}
                                                         className="bg-[#0b0b1a] text-slate-300 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm cursor-pointer"
                                                     >
                                                         <option value="cie-igcse" className="bg-[#0b0b1a] text-slate-300">Cambridge IGCSE</option>
                                                         <option value="cie-as" className="bg-[#0b0b1a] text-slate-300">Cambridge AS-Level</option>
                                                         <option value="cie-alevel" className="bg-[#0b0b1a] text-slate-300">Cambridge A-Level</option>
                                                         <option value="edexcel-igcse" className="bg-[#0b0b1a] text-slate-300">Edexcel IGCSE</option>
                                                         <option value="edexcel-as" className="bg-[#0b0b1a] text-slate-300">Edexcel AS-Level</option>
                                                         <option value="edexcel-a2" className="bg-[#0b0b1a] text-slate-300">Edexcel A2-Level</option>
                                                     </select>
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Role</label>
                                                     <select 
                                                         value={formData.role}
                                                         onChange={e => setFormData({...formData, role: e.target.value as any})}
                                                         className="bg-[#0b0b1a] text-slate-300 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm cursor-pointer"
                                                     >
                                                         <option value="student" className="bg-[#0b0b1a] text-slate-300">Student</option>
                                                         <option value="moderator" className="bg-[#0b0b1a] text-slate-300">Registration Moderator</option>
                                                     </select>
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Email (Optional)</label>
                                                     <input 
                                                         type="email" 
                                                         placeholder="student@example.com" 
                                                         value={formData.email}
                                                         onChange={e => setFormData({...formData, email: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Phone (Optional)</label>
                                                     <input 
                                                         type="text" 
                                                         placeholder="e.g. +96279000000" 
                                                         value={formData.phone}
                                                         onChange={e => setFormData({...formData, phone: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white"
                                                     />
                                                 </div>

                                                 <div className="flex flex-col gap-1.5 md:col-span-2">
                                                     <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Notes (Optional)</label>
                                                     <textarea 
                                                         placeholder="Add any internal student notes or details..." 
                                                         rows={2}
                                                         value={formData.notes}
                                                         onChange={e => setFormData({...formData, notes: e.target.value})}
                                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm text-white resize-none"
                                                     />
                                                 </div>

                                                 <button 
                                                     disabled={isCreating}
                                                     className="md:col-span-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 mt-2"
                                                 >
                                                     {isCreating ? 'Creating...' : 'Create Student Account'}
                                                 </button>
                                             </form>
                                             {status.msg && (
                                                 <div className={`mt-4 p-3 rounded-xl text-xs font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                                                     {status.msg}
                                                 </div>
                                             )}

                                             {/* Generated Credentials Presentation */}
                                             {createdCredentials && (
                                                 <div className="mt-4 bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-2xl space-y-4 animate-in fade-in duration-300">
                                                     <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                                                         <CheckCircle2 className="w-4 h-4" />
                                                         Credentials Generated Successfully!
                                                     </h5>
                                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                                         <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center justify-between">
                                                             <div>
                                                                 <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Username</span>
                                                                 <code className="text-white font-mono font-bold">{createdCredentials.username}</code>
                                                             </div>
                                                             <button 
                                                                 onClick={() => {
                                                                     navigator.clipboard.writeText(createdCredentials.username);
                                                                     setCopiedField('username');
                                                                     setTimeout(() => setCopiedField(null), 1500);
                                                                 }}
                                                                 className="text-slate-400 hover:text-white p-1"
                                                             >
                                                                 {copiedField === 'username' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                             </button>
                                                         </div>
                                                         <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center justify-between">
                                                             <div>
                                                                 <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Password</span>
                                                                 <code className="text-white font-mono font-bold">{createdCredentials.password || '••••••••'}</code>
                                                             </div>
                                                             <button 
                                                                 onClick={() => {
                                                                     if (createdCredentials.password) {
                                                                         navigator.clipboard.writeText(createdCredentials.password);
                                                                         setCopiedField('password');
                                                                         setTimeout(() => setCopiedField(null), 1500);
                                                                     }
                                                                 }}
                                                                 className="text-slate-400 hover:text-white p-1"
                                                                 disabled={!createdCredentials.password}
                                                             >
                                                                 {copiedField === 'password' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                             </button>
                                                         </div>
                                                     </div>
                                                     <button 
                                                         onClick={() => {
                                                             const inviteMsg = `Welcome to ChemZim! 👋\n\nYour account has been created successfully.\n\n🔐 Credentials:\nUsername: ${createdCredentials.username}\nPassword: ${createdCredentials.password || '••••••••'}\n\n🔗 Access here: ${window.location.origin}/login`;
                                                             navigator.clipboard.writeText(inviteMsg);
                                                             setCopiedField('invite');
                                                             setTimeout(() => setCopiedField(null), 1500);
                                                         }}
                                                         className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                                                     >
                                                         {copiedField === 'invite' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                                         Copy Invite Message
                                                     </button>
                                                 </div>
                                             )}
                                         </div>

                                         {/* Student Accounts List */}
                                         <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-6">
                                             <h4 className="text-lg font-bold flex items-center gap-2 text-indigo-400">
                                                 <Users className="w-5 h-5" />
                                                 Registered Student Accounts
                                             </h4>

                                             {isLoadingStudents ? (
                                                 <div className="p-8 text-center text-slate-500 text-sm">
                                                     <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-2" />
                                                     Loading students...
                                                 </div>
                                             ) : students.length === 0 ? (
                                                 <div className="p-8 text-center text-slate-500 text-sm">
                                                     No student accounts found.
                                                 </div>
                                             ) : (
                                                 <div className="overflow-x-auto">
                                                     <table className="w-full text-left border-collapse">
                                                         <thead>
                                                             <tr className="border-b border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                                                 <th className="pb-3 font-semibold">Student Info</th>
                                                                 <th className="pb-3 font-semibold">Username</th>
                                                                 <th className="pb-3 font-semibold">Curriculum</th>
                                                                 <th className="pb-3 font-semibold">Devices</th>
                                                                 <th className="pb-3 font-semibold">Status</th>
                                                                 <th className="pb-3 font-semibold text-right">Actions</th>
                                                             </tr>
                                                         </thead>
                                                         <tbody className="divide-y divide-white/5">
                                                             {students
                                                                 .filter(s => {
                                                                     if (!studentSearch) return true;
                                                                     const query = studentSearch.toLowerCase();
                                                                     return s.name.toLowerCase().includes(query) || 
                                                                            s.username.toLowerCase().includes(query) ||
                                                                            (s.email && s.email.toLowerCase().includes(query));
                                                                 })
                                                                 .map((student) => (
                                                                     <tr key={student.id} className="text-sm">
                                                                         <td className="py-4">
                                                                             <div className="flex items-center gap-3">
                                                                                 <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 overflow-hidden flex items-center justify-center">
                                                                                     <img 
                                                                                         src={student.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${student.username}`} 
                                                                                         alt={student.name}
                                                                                         className="w-full h-full object-cover" 
                                                                                     />
                                                                                 </div>
                                                                                 <div>
                                                                                     <p className="font-bold text-white leading-none mb-1">{student.name}</p>
                                                                                     {student.email && <p className="text-xs text-slate-500">{student.email}</p>}
                                                                                 </div>
                                                                             </div>
                                                                         </td>
                                                                         <td className="py-4 font-mono text-xs text-slate-300">
                                                                             {student.username}
                                                                         </td>
                                                                         <td className="py-4">
                                                                             <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-300 capitalize">
                                                                                 {student.grade ? student.grade.replace('-', ' ') : 'N/A'}
                                                                             </span>
                                                                         </td>
                                                                         <td className="py-4 text-xs font-semibold text-slate-400">
                                                                             {student.devices?.length || 0} device(s)
                                                                         </td>
                                                                         <td className="py-4">
                                                                             <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold border ${student.isActive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                                                                                 <span className={`w-1.5 h-1.5 rounded-full ${student.isActive ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                                                                                 {student.isActive ? 'Active' : 'Suspended'}
                                                                             </span>
                                                                         </td>
                                                                         <td className="py-4 text-right">
                                                                             <div className="flex items-center justify-end gap-2">
                                                                                 <button
                                                                                     onClick={() => handleStudentAction('toggle-active', student.id)}
                                                                                     className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer border ${
                                                                                         student.isActive
                                                                                             ? 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20 text-amber-400'
                                                                                             : 'bg-emerald-500/10 hover:bg-emerald-600/20 border-emerald-500/20 text-emerald-400'
                                                                                     }`}
                                                                                 >
                                                                                     {student.isActive ? 'Suspend' : 'Activate'}
                                                                                 </button>
                                                                                 <button
                                                                                     onClick={() => handleStudentAction('delete', student.id)}
                                                                                     className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 hover:text-white rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                                                                 >
                                                                                     Delete
                                                                                 </button>
                                                                             </div>
                                                                         </td>
                                                                     </tr>
                                                                 ))}
                                                         </tbody>
                                                     </table>
                                                 </div>
                                             )}
                                         </div>
                                    </div>
                                ) : activeTab === 'devices' ? (
                                    <div className="space-y-6 animate-in fade-in duration-500">
                                        {isLoadingDevices ? (
                                            <div className="p-10 text-center">
                                                <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
                                                <p className="text-slate-500 text-sm">Fetching device security requests...</p>
                                            </div>
                                        ) : deviceRequests.length > 0 ? (
                                            <div className="grid gap-4">
                                                {deviceRequests.map((req) => (
                                                    <div key={req.id} className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                        <div className="space-y-2">
                                                            <div className="flex items-center gap-3">
                                                                <span className="font-bold text-lg text-white">{req.studentName}</span>
                                                                <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/20">Pending Approval</span>
                                                            </div>
                                                            <div className="text-sm text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                                                                <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-indigo-400" /> {req.device.name} ({req.device.os} - {req.device.browser})</span>
                                                                {req.device.ipAddress && <span className="text-slate-500">• IP: {req.device.ipAddress}</span>}
                                                            </div>
                                                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                                                <Clock className="w-3.5 h-3.5" /> Requested {new Date(req.requestedAt).toLocaleString()}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <button 
                                                                onClick={() => handleDeviceAction('approve', req.id)}
                                                                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md shadow-emerald-500/10 cursor-pointer"
                                                            >
                                                                Approve
                                                            </button>
                                                            <button 
                                                                onClick={() => handleDeviceAction('reject', req.id)}
                                                                className="px-4 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 hover:text-white rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                                                            >
                                                                Reject
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-12 text-center bg-white/[0.01] border border-dashed border-white/5 rounded-3xl space-y-4">
                                                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                                                    ✓
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-white">All Devices Secure</h4>
                                                    <p className="text-slate-500 text-sm max-w-sm mx-auto mt-1">
                                                        There are no pending device registration requests at the moment.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-8 space-y-6 animate-in fade-in duration-500">
                                        <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-3xl space-y-4">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                                🚀 Welcome to ChemZim Admin Console
                                            </h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                This console allows you to manage student registrations, oversee active sessions, and verify security protocols.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                                    <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Students Registered</span>
                                                    <span className="text-2xl font-black text-white">{authStats ? authStats.totalStudents : 0}</span>
                                                </div>
                                                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                                    <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Pending Device Approvals</span>
                                                    <span className="text-2xl font-black text-amber-400">{authStats ? authStats.pendingDevices : 0}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Quick Actions & Log */}
                    <div className="space-y-8">
                        <section className="space-y-4">
                            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Quick Actions</h3>
                            <div className="grid gap-3">
                                <button className="flex items-center gap-3 p-4 bg-indigo-500 hover:bg-indigo-600 rounded-2xl w-full text-left font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                                    <BookOpen className="w-5 h-5" />
                                    Create New Lesson
                                </button>
                                <button className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl w-full text-left font-bold transition-all active:scale-95">
                                    <Users className="w-5 h-5 text-emerald-400" />
                                    Generate Student Passwords
                                </button>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Audit Log</h3>
                            <div className="space-y-4 bg-white/[0.02] border border-white/5 p-6 rounded-3xl">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="relative">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                                            {i < 2 && <div className="absolute top-4 left-[3px] w-[2px] h-full bg-white/5" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-300">New registration request from Ahmad</p>
                                            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tight">2 minutes ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default function AdminPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        }>
            <AdminContent />
        </Suspense>
    );
}
