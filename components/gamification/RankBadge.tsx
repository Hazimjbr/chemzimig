import { Shield, Sparkles, Droplets, Gem, Zap, Crown } from 'lucide-react';

interface RankBadgeProps {
    level: number;
    className?: string;
}

export default function RankBadge({ level, className = '' }: RankBadgeProps) {
    let rankName = 'Truth Seeker';
    let rankColor = 'from-slate-500 to-slate-700'; // Mysterious Grey
    let icon = <Shield size={10} className="text-slate-200" />;
    let borderColor = 'border-slate-500';

    if (level >= 50) {
        rankName = 'Chem-Dragon';
        rankColor = 'from-yellow-600 via-orange-500 to-red-600'; // Legendary Gold/Fire
        icon = <Crown size={12} className="text-yellow-100 animate-pulse" />;
        borderColor = 'border-yellow-500';
    } else if (level >= 20) {
        rankName = 'Fusion Archon';
        rankColor = 'from-orange-500 to-red-600'; // Fiery Orange
        icon = <Zap size={10} className="text-orange-100" />;
        borderColor = 'border-orange-400';
    } else if (level >= 10) {
        rankName = 'Crystal Sentinel';
        rankColor = 'from-purple-500 to-indigo-600'; // Amethyst Purple
        icon = <Gem size={10} className="text-purple-100" />;
        borderColor = 'border-purple-400';
    } else if (level >= 5) {
        rankName = 'Mercury Rogue';
        rankColor = 'from-cyan-500 to-blue-600'; // Liquid Silver/Blue
        icon = <Droplets size={10} className="text-cyan-100" />;
        borderColor = 'border-cyan-400';
    }

    return (
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${borderColor} bg-gradient-to-r ${rankColor} shadow-lg backdrop-blur-sm ${className}`}>
            {icon}
            <span className="text-[10px] md:text-xs font-black text-white tracking-wider uppercase drop-shadow-md">{rankName}</span>
        </div>
    );
}
