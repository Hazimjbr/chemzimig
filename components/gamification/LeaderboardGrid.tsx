import { motion } from 'framer-motion';
import { Flame, Target, Beaker } from 'lucide-react';
import RankBadge from './RankBadge';
import { getTitleIcon } from '@/lib/gamification/title-icons';
import type { LeaderboardEntry } from '@/types/leaderboard';

interface LeaderboardGridProps {
    entries: LeaderboardEntry[];
    delayOffset?: number;
}

export default function LeaderboardGrid({ entries, delayOffset = 0 }: LeaderboardGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {entries.map((entry, index) => (
                <motion.div
                    key={entry.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: delayOffset + (index * 0.05) }}
                    className="group relative backdrop-blur-md rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{
                        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:via-purple-500/5 transition-all rounded-2xl pointer-events-none" />

                    <div className="flex items-start gap-4">
                        {/* Rank & Avatar */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center font-black text-gray-500 bg-black/20 rounded-lg">
                                #{entry.rank}
                            </div>
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl bg-gray-800 border border-gray-700 shadow-inner overflow-hidden relative">
                                {entry.avatar ? (
                                    <img
                                        src={entry.avatar}
                                        alt={entry.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).parentElement!.innerText = entry.name.charAt(0);
                                        }}
                                    />
                                ) : (
                                    entry.name.charAt(0)
                                )}
                            </div>
                        </div>

                        {/* Main Info */}
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-white text-lg truncate leading-tight">{entry.name}</h3>
                                    {entry.title && (
                                        <div className="flex items-center gap-1.5 mt-1">
                                            {getTitleIcon(entry.title)}
                                            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 uppercase tracking-wider">
                                                {entry.title}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 mt-2">
                                        <RankBadge level={entry.level} />
                                        <div className="flex items-center gap-1 text-orange-400 text-xs font-bold bg-orange-400/10 px-2 py-0.5 rounded-full border border-orange-400/20">
                                            <Flame size={10} fill="currentColor" /> {entry.streak} Day{entry.streak !== 1 ? 's' : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-mono font-black text-purple-400 text-xl">
                                        {entry.xp.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total XP</div>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <div className="bg-black/20 rounded-lg p-2 flex items-center gap-3 border border-white/5">
                                    <div className="p-1.5 bg-green-500/20 rounded-md text-green-400">
                                        <Target size={14} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Accuracy</div>
                                        <div className="text-sm font-bold text-gray-200">
                                            {entry.labAccuracy !== undefined ? `${entry.labAccuracy}%` : <span className="text-gray-500">—</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/20 rounded-lg p-2 flex items-center gap-3 border border-white/5">
                                    <div className="p-1.5 bg-blue-500/20 rounded-md text-blue-400">
                                        <Beaker size={14} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Experiments</div>
                                        <div className="text-sm font-bold text-gray-200">
                                            {entry.experimentsCompleted !== undefined ? entry.experimentsCompleted : <span className="text-gray-500">—</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
