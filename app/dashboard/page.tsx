'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
    BookOpen, 
    Trophy, 
    Flame, 
    ChevronRight,
    Star,
    Clock,
    Zap,
    TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
    const { user } = useAuth();
    const [greeting, setGreeting] = useState('Welcome');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, []);

    const stats = [
        { label: 'Current Level', value: user?.level || 1, icon: Star, color: 'text-amber-400', bg: 'bg-amber-400/10' },
        { label: 'Total XP', value: user?.xp || 0, icon: Zap, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
        { label: 'Completed', value: '0', icon: BookOpen, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
        { label: 'Day Streak', value: '1', icon: Flame, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* Hero Welcome Section */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-8 lg:p-14 shadow-2xl shadow-indigo-500/20 group">
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                           <TrendingUp className="w-3 h-3" />
                           Your path to Chemistry Excellence
                        </div>
                        <h1 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                            {greeting}, <span className="text-indigo-200">{user?.name?.split(' ')[0] || 'Student'}</span> 👋
                        </h1>
                        <p className="text-indigo-100/70 text-lg max-w-xl leading-relaxed font-medium">
                            Ready to master the elements today? You have new topical lessons and practice quizzes available for your <strong>{user?.grade || 'IGCSE'}</strong> curriculum.
                        </p>
                        <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                            <Link 
                                href="/dashboard/lessons" 
                                className="group/btn flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-black/10 active:scale-95"
                            >
                                Start Learning
                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            <Link 
                                href="/dashboard/quizzes" 
                                className="flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-500/30 transition-all active:scale-95"
                            >
                                Practice Quiz
                            </Link>
                        </div>
                    </div>
                    
                    {/* Visual Asset / Illustration Placeholder */}
                    <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse" />
                        <div className="text-8xl lg:text-9xl filter drop-shadow-2xl animate-bounce duration-[3000ms]">
                           🧪
                        </div>
                    </div>
                </div>

                {/* Decorative background vectors */}
                <div className="absolute -top-12 -right-12 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {stats.map((stat, i) => (
                    <div 
                        key={i} 
                        className="relative bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 rounded-[1.5rem] hover:bg-white/[0.05] hover:border-white/10 transition-all group overflow-hidden"
                    >
                        <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            <stat.icon className={`w-7 h-7 ${stat.color}`} />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-3xl font-black text-white">{stat.value}</p>
                        
                        {/* Interactive Sparkle Effect */}
                        <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                    </div>
                ))}
            </div>

            {/* Content Sections */}
            <div className="grid lg:grid-cols-3 gap-10">
                
                {/* Recommended Lessons List */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-1">Recommended for You</h3>
                           <p className="text-sm text-slate-500">Based on your current progress in {user?.grade || 'IGCSE'}</p>
                        </div>
                        <Link href="/dashboard/lessons" className="text-indigo-400 text-sm font-bold hover:text-indigo-300 transition-colors flex items-center gap-1 group">
                            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    
                    <div className="grid gap-5">
                        {[
                            { title: 'Atomic Theory & Structure', unit: 'Unit 1: The Atom', time: '12 min', xp: '50', icon: '⚛️' },
                            { title: 'Ionic & Covalent Bonding', unit: 'Unit 2: Bonding', time: '18 min', xp: '75', icon: '💎' },
                        ].map((lesson, i) => (
                            <div key={i} className="group relative bg-[#0a0a1f] border border-white/5 p-6 rounded-3xl flex items-center gap-6 hover:bg-indigo-500/[0.03] hover:border-indigo-500/20 transition-all cursor-pointer">
                                <div className="w-20 h-20 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 shadow-inner">
                                    {lesson.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1">{lesson.unit}</p>
                                    <h4 className="font-bold text-xl text-white mb-2 truncate group-hover:text-indigo-100">{lesson.title}</h4>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-slate-600" />
                                            {lesson.time}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Trophy className="w-4 h-4 text-amber-500/60" />
                                            +{lesson.xp} XP
                                        </div>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/5 group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
                                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar: Weekly Activity */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white">Weekly Activity</h3>
                    <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] space-y-8 shadow-inner shadow-black/40">
                        <div className="h-44 flex items-end justify-between gap-3 px-2">
                            {[20, 50, 35, 80, 55, 20, 10].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                                    <div 
                                        className="w-full bg-gradient-to-t from-indigo-500/20 to-indigo-500/60 rounded-t-xl transition-all hover:to-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                                        style={{ height: `${h}%` }}
                                    />
                                    <span className="text-[10px] text-slate-600 font-black uppercase">
                                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-slate-400">Weekly Goal</span>
                                <span className="text-sm font-black text-indigo-400">75% Achieved</span>
                            </div>
                            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                <div 
                                    className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)] transition-all duration-1000" 
                                    style={{ width: '75%' }}
                                />
                            </div>
                            <p className="text-[11px] text-slate-600 mt-3 font-medium text-center italic">
                                &quot;Success is the sum of small efforts repeated day in and day out.&quot;
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
