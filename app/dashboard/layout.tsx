'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    LayoutDashboard, 
    BookOpen, 
    Trophy, 
    User, 
    LogOut,
    Menu,
    X,
    ShieldCheck
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Lessons', href: '/dashboard/lessons', icon: BookOpen },
    { name: 'Quizzes', href: '/dashboard/quizzes', icon: Trophy },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const { user, logout } = useAuth();

    return (
        <div className="flex min-h-screen bg-[#050510] text-white font-sans overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0a1f]/80 backdrop-blur-2xl border-r border-white/5
                transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-10">
                        <Link href="/dashboard" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                                ⚗️
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                ChemZim
                            </span>
                        </Link>
                        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                                        ${isActive 
                                            ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-inner shadow-indigo-500/5' 
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'}
                                    `}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : ''}`} />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}

                        {user?.isAdmin && (
                            <div className="pt-4 mt-4 border-t border-white/5">
                                <Link
                                    href="/admin"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-400 hover:bg-emerald-500/10 transition-all border border-transparent hover:border-emerald-500/20"
                                >
                                    <ShieldCheck className="w-5 h-5" />
                                    <span className="font-medium">Management</span>
                                </Link>
                            </div>
                        )}
                    </nav>

                    <div className="mt-auto border-t border-white/5 pt-6 space-y-4">
                        <div className="flex items-center gap-3 px-2">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-white/10 flex items-center justify-center text-xl overflow-hidden shadow-inner">
                                {user?.image ? (
                                    <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    '👤'
                                )}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold truncate text-white/90">{user?.name || 'Student'}</span>
                                <span className="text-xs text-slate-500 truncate">{user?.grade || 'No Grade Set'}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => logout()}
                            className="flex items-center gap-3 w-full px-4 py-3 text-rose-400/80 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all group"
                        >
                            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Visual Background Orbs */}
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

                {/* Header */}
                <header className="h-20 border-b border-white/5 bg-[#050510]/40 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 z-10">
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                            {navItems.find(i => i.href === pathname)?.name || 'Welcome'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                            <Trophy className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-bold text-amber-500/90">{user?.xp || 0} XP</span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 relative z-0">
                    {children}
                </div>
            </main>
        </div>
    );
}
