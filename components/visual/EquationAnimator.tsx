'use client';

import { motion } from 'framer-motion';

interface EquationAnimatorProps {
    reactants: [string, string][]; // [name, colorHex]
    products: [string, string][]; // [name, colorHex]
}

export default function EquationAnimator({ reactants, products }: EquationAnimatorProps) {
    return (
        <div className="bg-[#0a0a1f]/40 border border-white/5 rounded-2xl p-6 text-center overflow-hidden">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-5">Chemical Reaction Animation</h4>

            <div className="flex items-center justify-center gap-6 flex-wrap">
                {/* Reactants */}
                <div className="flex gap-3">
                    {reactants.map((r, i) => (
                        <motion.div
                            key={`r-${i}`}
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="px-4 py-2 rounded-xl font-bold border text-sm"
                            style={{
                                backgroundColor: `${r[1]}15`,
                                borderColor: r[1],
                                color: r[1],
                            }}
                        >
                            {r[0]}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="text-slate-500 font-mono text-lg"
                >
                    ⟳
                </motion.div>

                {/* Products */}
                <div className="flex gap-3">
                    {products.map((p, i) => (
                        <motion.div
                            key={`p-${i}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1 + i * 0.2 }}
                            className="px-4 py-2 rounded-xl font-bold border text-sm"
                            style={{
                                backgroundColor: `${p[1]}15`,
                                borderColor: p[1],
                                color: p[1],
                            }}
                        >
                            {p[0]}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
