'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import { 
    User as UserIcon, Shield, Award, Calendar, BookOpen, 
    Flame, Zap, Trophy, ShieldCheck, Laptop, LogOut, Camera, X as CloseIcon
} from 'lucide-react';

const PRESET_AVATARS = [
    { value: '/images/avatars/assassin.jpg', name: 'Assassin', color: 'bg-indigo-500/10 border-indigo-500/20', isImage: true },
    { value: '/images/avatars/netrunner.jpg', name: 'Netrunner', color: 'bg-pink-500/10 border-pink-500/20', isImage: true },
    { value: '/images/avatars/valkyrie.jpg', name: 'Valkyrie', color: 'bg-blue-500/10 border-blue-500/20', isImage: true },
    { value: '/images/avatars/chibi.jpg', name: 'Chibi', color: 'bg-amber-500/10 border-amber-500/20', isImage: true },
    { value: '/images/avatars/dj.jpg', name: 'Neon DJ', color: 'bg-purple-500/10 border-purple-500/20', isImage: true },
    { value: '/images/avatars/flamelord.jpg', name: 'Flame Lord', color: 'bg-orange-500/10 border-orange-500/20', isImage: true },
    { value: '/images/avatars/icemage.jpg', name: 'Ice Mage', color: 'bg-sky-500/10 border-sky-500/20', isImage: true },
    { value: '/images/avatars/esports.jpg', name: 'Esports Pro', color: 'bg-rose-500/10 border-rose-500/20', isImage: true },
    { value: '/images/avatars/athlete.jpg', name: 'Athlete', color: 'bg-cyan-500/10 border-cyan-500/20', isImage: true },
    { value: '/images/avatars/fox.jpg', name: 'Cyber Fox', color: 'bg-amber-500/10 border-amber-500/20', isImage: true },
    { value: '/images/avatars/dragon.jpg', name: 'Dragon Knight', color: 'bg-violet-500/10 border-violet-500/20', isImage: true },
    { value: '/images/avatars/plague.jpg', name: 'Poison Alchemist', color: 'bg-emerald-500/10 border-emerald-500/20', isImage: true },
    { value: '/images/avatars/royal.jpg', name: 'Royal Mage', color: 'bg-indigo-500/10 border-indigo-500/20', isImage: true },
    { value: '🧪', name: 'Flask', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', isImage: false },
    { value: '⚛️', name: 'Atom', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', isImage: false },
    { value: '🧑‍🔬', name: 'Chemist', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20', isImage: false },
    { value: '🧬', name: 'DNA', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', isImage: false },
    { value: '🔥', name: 'Flame', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20', isImage: false },
    { value: '💎', name: 'Crystal', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20', isImage: false },
    { value: '⚖️', name: 'Balance', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20', isImage: false },
    { value: '🌡️', name: 'Thermo', color: 'bg-red-500/10 text-red-400 border-red-500/20', isImage: false },
];

const isUrl = (str: string) => str.startsWith('http') || str.startsWith('/') || str.startsWith('data:');

export default function ProfilePage() {
    const { user, deviceInfo, logout, updateUser } = useAuth();
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const totalQuizzesSolved = Object.keys(quizScores).length;

    const handleSelectAvatar = async (avatar: string) => {
        setIsUpdating(true);
        try {
            const res = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: avatar }),
            });
            const data = await res.json();
            if (data.success) {
                updateUser({ image: avatar });
                setIsModalOpen(false);
            } else {
                alert(data.error || 'Failed to update avatar');
            }
        } catch (err) {
            console.error(err);
            alert('Failed to update avatar');
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto pb-20 animate-in fade-in duration-500">
            {/* Header Hero Section */}
            <div className="glass-card glass-card-indigo p-8 mb-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                    <div className="w-24 h-24 rounded-2xl bg-indigo-500/10 border-2 border-indigo-500/30 flex items-center justify-center text-4xl overflow-hidden shadow-inner group-hover:scale-105 transition-all duration-300 relative">
                        {user?.image ? (
                            isUrl(user.image) ? (
                                <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-5xl">{user.image}</span>
                            )
                        ) : (
                            '👤'
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
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

            {/* Avatar Selector Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="glass-card max-w-md w-full p-6 space-y-6 relative border border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                        >
                            <CloseIcon className="w-5 h-5" />
                        </button>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">Select Chemistry Avatar</h3>
                            <p className="text-slate-400 text-xs">Choose a scientific avatar to represent your chemical identity.</p>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            {PRESET_AVATARS.map((av) => (
                                <button
                                    key={av.name}
                                    onClick={() => handleSelectAvatar(av.value)}
                                    disabled={isUpdating}
                                    className={`aspect-square rounded-2xl border text-3xl flex flex-col items-center justify-center p-2 transition-all hover:scale-105 hover:bg-white/5 cursor-pointer ${av.color} ${
                                        user?.image === av.value ? 'ring-2 ring-indigo-500 border-transparent' : 'border-white/5'
                                    }`}
                                >
                                    {av.isImage ? (
                                        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-navy-950">
                                            <img src={av.value} alt={av.name} className="w-full h-full object-cover" />
                                        </div>
                                    ) : (
                                        <span>{av.value}</span>
                                    )}
                                    <span className="text-[10px] text-slate-500 font-semibold mt-1">{av.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
