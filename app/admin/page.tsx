'use client';

import React, { useEffect, useState } from 'react';
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
    Clock
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('overview');
    
    // --- Student Creation State ---
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        grade: 'IGCSE'
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

    const handleCreateStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        setStatus({ type: null, msg: '' });

        try {
            const res = await fetch('/api/auth/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ type: 'success', msg: `Student ${formData.username} created successfully!` });
                setFormData({ name: '', username: '', password: '', grade: 'IGCSE' });
            } else {
                setStatus({ type: 'error', msg: data.error || 'Failed to create student' });
            }
        } catch (err) {
            setStatus({ type: 'error', msg: 'Network error. Try again.' });
        } finally {
            setIsCreating(false);
        }
    };
    useEffect(() => {
        if (!isLoading && (!user?.isAdmin)) {
            router.push('/dashboard');
        }
    }, [user, isLoading, router]);

    if (isLoading || !user?.isAdmin) {
        return (
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    const stats = [
        { label: 'Total Students', value: '0', icon: Users, color: 'text-blue-400' },
        { label: 'Active Today', value: '0', icon: Activity, color: 'text-emerald-400' },
        { label: 'Pending Devices', value: '0', icon: Smartphone, color: 'text-amber-400' },
        { label: 'Security Alerts', value: 'None', icon: ShieldAlert, color: 'text-rose-400' },
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

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white/[0.03] border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all group">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <MoreVertical className="w-5 h-5 text-slate-700 hover:text-white cursor-pointer" />
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
                                                <input 
                                                    type="text" 
                                                    placeholder="Full Name" 
                                                    required
                                                    value={formData.name}
                                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm"
                                                />
                                                <input 
                                                    type="text" 
                                                    placeholder="Username" 
                                                    required
                                                    value={formData.username}
                                                    onChange={e => setFormData({...formData, username: e.target.value})}
                                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm"
                                                />
                                                <input 
                                                    type="text" 
                                                    placeholder="Login Password" 
                                                    required
                                                    value={formData.password}
                                                    onChange={e => setFormData({...formData, password: e.target.value})}
                                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm"
                                                />
                                                <select 
                                                    value={formData.grade}
                                                    onChange={e => setFormData({...formData, grade: e.target.value})}
                                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-all text-sm appearance-none"
                                                >
                                                    <option value="IGCSE">IGCSE</option>
                                                    <option value="AS Level">AS Level</option>
                                                    <option value="A2 Level">A2 Level</option>
                                                    <option value="IB">IB Chemistry</option>
                                                </select>
                                                <button 
                                                    disabled={isCreating}
                                                    className="md:col-span-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                                                >
                                                    {isCreating ? 'Creating...' : 'Create Student Account'}
                                                </button>
                                            </form>
                                            {status.msg && (
                                                <div className={`mt-4 p-3 rounded-xl text-xs font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                                                    {status.msg}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-10 text-center space-y-4">
                                       <div className="w-20 h-20 bg-white/5 border border-white/5 rounded-full flex items-center justify-center mx-auto text-3xl">
                                          ⏳
                                       </div>
                                       <div>
                                          <h4 className="font-bold text-lg">Waiting for data connection...</h4>
                                          <p className="text-slate-500 text-sm max-w-sm mx-auto">
                                             Please log in as an admin to manage your students and platform items.
                                          </p>
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
