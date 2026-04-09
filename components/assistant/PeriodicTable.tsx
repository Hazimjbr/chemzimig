'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Info } from 'lucide-react';
import { elements, categoryColors, Element } from '@/lib/periodic-data';

interface PeriodicTableProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PeriodicTable({ isOpen, onClose }: PeriodicTableProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedElement, setSelectedElement] = useState<Element | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleElementClick = (el: Element) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if (selectedElement?.number === el.number) {
            setSelectedElement(null);
            return;
        }

        setSelectedElement(el);
        timeoutRef.current = setTimeout(() => {
            setSelectedElement(null);
        }, 3000);
    };

    const foundElement = searchTerm
        ? elements.find(
            el => el.symbol.toLowerCase() === searchTerm.toLowerCase() ||
                el.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                el.number.toString() === searchTerm
        )
        : null;

    const cellSize = 44;
    const gap = 4;

    const formatMass = (mass: string | number) => {
        const num = parseFloat(mass.toString().replace(/[^\d.]/g, ''));
        return !isNaN(num) ? num.toFixed(2) : mass;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                        exit={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        className="fixed left-1/2 top-1/2 z-[61] w-[95vw] max-w-5xl h-[90vh] bg-[#0a0a1a]/90 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 flex justify-between items-center gap-4 bg-gradient-to-r from-indigo-500/10 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-500/20 rounded-lg">
                                    <Info className="text-indigo-400" size={20} />
                                </div>
                                <h2 className="text-xl font-bold text-white tracking-tight">
                                    Interactive Periodic Table
                                </h2>
                            </div>

                            {/* Search Box */}
                            <div className="relative flex-1 max-w-sm group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search (e.g. Iron, Fe, 26)"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm"
                                />
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2.5 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Element Showcase */}
                        <div className="relative h-28 border-b border-white/5 overflow-hidden flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {(foundElement || selectedElement) ? (
                                    <motion.div
                                        key={(foundElement || selectedElement)?.number}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        className="flex gap-12 items-center"
                                    >
                                        <div className="text-center">
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Number</div>
                                            <div className="text-2xl font-bold text-white">{(foundElement || selectedElement)?.number}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Symbol</div>
                                            <div 
                                                className="text-5xl font-black"
                                                style={{ color: categoryColors[(foundElement || selectedElement)!.category] }}
                                            >
                                                {(foundElement || selectedElement)?.symbol}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Name</div>
                                            <div className="text-2xl font-bold text-white">{(foundElement || selectedElement)?.name}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Atomic Mass</div>
                                            <div className="text-2xl font-bold text-white">{formatMass((foundElement || selectedElement)!.mass)}</div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-white/20 italic text-sm"
                                    >
                                        Hover or search for an element to see details
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full" />
                        </div>

                        {/* Grid Container */}
                        <div className="flex-1 overflow-auto p-8 custom-scrollbar">
                            <div
                                className="grid"
                                style={{
                                    gridTemplateColumns: `repeat(18, ${cellSize}px)`,
                                    gap: `${gap}px`,
                                    width: 'fit-content',
                                    margin: '0 auto'
                                }}
                            >
                                {elements.map((el) => {
                                    const isHighlighted = foundElement?.number === el.number;
                                    const isSelected = selectedElement?.number === el.number;

                                    return (
                                        <motion.div
                                            key={el.number}
                                            onClick={() => handleElementClick(el)}
                                            whileHover={{ scale: 1.1, zIndex: 10 }}
                                            animate={{
                                                scale: isSelected ? 1.05 : 1,
                                                borderColor: isSelected || isHighlighted ? '#fff' : 'transparent',
                                                boxShadow: isSelected || isHighlighted ? '0 0 20px rgba(99,102,241,0.5)' : 'none'
                                            }}
                                            style={{
                                                gridColumn: el.x + 1,
                                                gridRow: el.y + 1,
                                                width: `${cellSize}px`,
                                                height: `${cellSize}px`,
                                                backgroundColor: isHighlighted || isSelected 
                                                    ? categoryColors[el.category] 
                                                    : `${categoryColors[el.category]}20`,
                                                border: `1.5px solid ${categoryColors[el.category]}50`,
                                            }}
                                            className="rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors relative"
                                        >
                                            <span className="absolute top-1 left-1 text-[8px] opacity-40 font-mono text-white">
                                                {el.number}
                                            </span>
                                            <span className={`text-sm font-bold ${isHighlighted || isSelected ? 'text-black' : 'text-white'}`}>
                                                {el.symbol}
                                            </span>
                                            <span className={`text-[7px] font-medium opacity-60 ${isHighlighted || isSelected ? 'text-black' : 'text-white'}`}>
                                                {formatMass(el.mass)}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="p-4 bg-white/5 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/5">
                            {Object.entries(categoryColors).map(([cat, color]) => (
                                <div key={cat} className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                                    <span className="text-[10px] capitalize text-white/50 tracking-wide font-medium">
                                        {cat.replace('-', ' ')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
