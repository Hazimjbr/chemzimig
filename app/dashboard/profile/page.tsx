'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import { 
    User as UserIcon, Shield, Award, Calendar, BookOpen, 
    Flame, Zap, Trophy, ShieldCheck, Laptop, LogOut
} from 'lucide-react';

export default function ProfilePage() {
    const { user, deviceInfo, logout } = useAuth();
    const { 
        xp, 
        level, 
        streak, 
        completedLessons, 
        quizScores, 
        achievements, 
        unlockedAchievements,
        mistakeInbox
    } = useGamification();

    const totalQuizzesSolved = Object.keys(quizScores).length;

    return (
        <div className="w-full max-w-4xl mx-auto pb-20 animate-in fade-in duration-500">
            {/* Header Hero Section */}
            <div className="glass-card glass-card-indigo p-8 mb-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-2xl bg-indigo-500/10 border-2 border-indigo-500/30 flex items-center justify-center text-4xl overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {user?.image ? (
                            <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                            '👤'
                        )}
                    </div>
                    {user?.isAdmin && (
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-navy-950 p-1.5 rounded-lg shadow-lg" title="Administrator">
                            <Shield className="w-4 h-4 fill-navy-950" />
                        </div>
                    )}
                </div>

                <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <h1 className="text-3xl font-extrabold text-white font-[family-name:var(--font-space-grotesk)]">
                            {user?.name || 'Guest Student'}
                        </h1>
                        <span className={`inline-fit w-fit mx-auto md:mx-0 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            user?.isAdmin ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                        }`}>
                            {user?.role ? user.role.toUpperCase() : 'STUDENT'}
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm">@{user?.username || 'guest'}</p>
                    <p className="text-slate-400 text-xs flex items-center justify-center md:justify-start gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-400" />
                        Track: <span className="text-indigo-300 font-semibold">{user?.track || 'cie-igcse'}</span>
                        <span className="mx-2 text-slate-600">•</span>
                        Grade: <span className="text-emerald-400 font-semibold">{user?.grade || 'No Grade Set'}</span>
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* Level */}
                <div className="glass-card glass-card-amber p-6 text-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
                        <Trophy className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-xs text-slate-500 block">Level</span>
                    <span className="text-2xl font-black text-white">{level}</span>
                </div>

                {/* XP */}
                <div className="glass-card glass-card-indigo p-6 text-center">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span className="text-xs text-slate-500 block">Total XP</span>
                    <span className="text-2xl font-black text-white">{xp}</span>
                </div>

                {/* Daily Streak */}
                <div className="glass-card glass-card-gold p-6 text-center">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-3">
                        <Flame className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-xs text-slate-500 block">Streak</span>
                    <span className="text-2xl font-black text-white flex items-center justify-center gap-1">
                        {streak?.currentStreak || 0}d {streak?.currentStreak > 0 && '🔥'}
                    </span>
                </div>

                {/* Completed */}
                <div className="glass-card glass-card-emerald p-6 text-center">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-xs text-slate-500 block">Completed</span>
                    <span className="text-2xl font-black text-white">
                        {completedLessons?.length || 0} <span className="text-xs font-normal text-slate-500">lessons</span>
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Achievements List (2 columns wide) */}
                <div className="md:col-span-2 space-y-6">
                    <div className="glass-card p-6 md:p-8">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Award className="w-5 h-5 text-amber-400" />
                            Achievements
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {achievements.map((ach) => {
                                const isUnlocked = unlockedAchievements.includes(ach.id);
                                return (
                                    <div 
                                        key={ach.id}
                                        className={`flex items-start gap-3 p-4 rounded-xl border transition-all duration-300 ${
                                            isUnlocked 
                                                ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/30' 
                                                : 'bg-white/[0.01] border-white/5 opacity-50'
                                        }`}
                                    >
                                        <div className="text-3xl p-1 bg-white/5 rounded-xl">{ach.icon}</div>
                                        <div className="min-w-0">
                                            <h4 className={`text-sm font-bold truncate ${isUnlocked ? 'text-amber-300' : 'text-slate-400'}`}>
                                                {ach.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                {ach.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Device & Security Panel (1 column wide) */}
                <div className="space-y-6">
                    {/* Activity Overview */}
                    <div className="glass-card p-6">
                        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-400" />
                            Stats Details
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Quizzes Taken:</span>
                                <span className="text-white font-semibold">{totalQuizzesSolved}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Mistakes to Review:</span>
                                <span className={`font-semibold ${mistakeInbox?.length > 0 ? 'text-amber-400' : 'text-slate-500'}`}>
                                    {mistakeInbox?.length || 0}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Total Days Active:</span>
                                <span className="text-white font-semibold">{streak?.totalDaysActive || 0}d</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Longest Streak:</span>
                                <span className="text-gold-400 font-bold">{streak?.longestStreak || 0}d</span>
                            </div>
                        </div>
                    </div>

                    {/* Device & Account Card */}
                    <div className="glass-card p-6 space-y-4">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                            <Laptop className="w-4 h-4 text-indigo-400" />
                            Account Device Lockdown
                        </h3>
                        
                        {deviceInfo ? (
                            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">OS:</span>
                                    <span className="text-slate-300 font-semibold">{deviceInfo.os}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Browser:</span>
                                    <span className="text-slate-300 font-semibold">{deviceInfo.browser}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Device Type:</span>
                                    <span className="text-slate-300 font-semibold">{deviceInfo.type}</span>
                                </div>
                                <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-emerald-400">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>Device locked & verified</span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-xs text-slate-500">Device fingerprint details loading...</p>
                        )}

                        <button
                            onClick={() => logout()}
                            className="w-full flex items-center justify-center gap-2 py-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 hover:text-white rounded-xl transition-all duration-300 font-semibold text-sm cursor-pointer"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout Session
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
