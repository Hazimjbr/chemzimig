'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface ScientificCalculatorProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ScientificCalculator({ isOpen, onClose }: ScientificCalculatorProps) {
    const [input, setInput] = useState('');
    const [displayLatex, setDisplayLatex] = useState('0');
    const [result, setResult] = useState<string | null>(null);
    const [isShift, setIsShift] = useState(false);
    const [isAlpha, setIsAlpha] = useState(false);
    const [isDeg, setIsDeg] = useState(true);

    // --- Advanced Math Engine ---
    const fact = (n: number): number => {
        if (n < 0 || !Number.isInteger(n)) return NaN;
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    };

    const nPr = (n: number, r: number): number => fact(n) / fact(n - r);
    const nCr = (n: number, r: number): number => fact(n) / (fact(r) * fact(n - r));

    const evaluateExpression = (expr: string): string => {
        try {
            let target = expr
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-')
                .replace(/π/g, `(${Math.PI})`)
                .replace(/e/g, `(${Math.E})`)
                .replace(/Ans/g, result || '0')
                .replace(/\^/g, '**');

            target = target.replace(/(\d+)!/g, 'fact($1)');
            const trigMod = isDeg ? `(${Math.PI}/180)*` : '';
            target = target.replace(/sin\(/g, `Math.sin(${trigMod}`).replace(/cos\(/g, `Math.cos(${trigMod}`).replace(/tan\(/g, `Math.tan(${trigMod}`)
                .replace(/asin\(/g, `${isDeg ? '180/Math.PI*' : ''}Math.asin(`).replace(/acos\(/g, `${isDeg ? '180/Math.PI*' : ''}Math.acos(`).replace(/atan\(/g, `${isDeg ? '180/Math.PI*' : ''}Math.atan(`);
            target = target.replace(/log\(/g, 'Math.log10(').replace(/ln\(/g, 'Math.log(').replace(/sqrt\(/g, 'Math.sqrt(').replace(/cbrt\(/g, 'Math.cbrt(');

            const scope = { fact, nPr, nCr, ...Math };
            const func = new Function('math', 'with(math) { return ' + target + ' }');
            const res = func(scope);
            if (isNaN(res) || !isFinite(res)) return 'Error';
            return String(parseFloat(res.toPrecision(10)));
        } catch (e) { return 'Error'; }
    };

    useEffect(() => {
        if (!input) { setDisplayLatex('0'); return; }
        let latex = input.replace(/\//g, '\\frac{').replace(/\*/g, '\\times ').replace(/\-/g, '-').replace(/sqrt\(/g, '\\sqrt{').replace(/\^2/g, '^2').replace(/\^3/g, '^3')
            .replace(/sin\(/g, '\\sin(').replace(/cos\(/g, '\\cos(').replace(/tan\(/g, '\\tan(').replace(/pi/g, '\\pi ').replace(/log\(/g, '\\log(').replace(/ln\(/g, '\\ln(');
        latex += '}'.repeat(Math.max(0, (latex.match(/{/g) || []).length - (latex.match(/}/g) || []).length));
        latex += ')'.repeat(Math.max(0, (latex.match(/\(/g) || []).length - (latex.match(/\)/g) || []).length));
        setDisplayLatex(latex);
    }, [input]);

    const handleKey = (key: string, shiftKey?: string, alphaKey?: string) => {
        let activeKey = key;
        if (isShift && shiftKey) activeKey = shiftKey;
        if (isAlpha && alphaKey) activeKey = alphaKey;
        if (activeKey === 'AC') { if (isShift) { onClose(); } else { setInput(''); setResult(null); } }
        else if (activeKey === 'DEL') { setInput(prev => prev.length > 1 ? prev.slice(0, -1) : ''); }
        else if (activeKey === '=') { setResult(evaluateExpression(input)); }
        else {
            let toAdd = activeKey;
            if (toAdd === 'sin⁻¹') toAdd = 'asin('; if (toAdd === 'cos⁻¹') toAdd = 'acos('; if (toAdd === 'tan⁻¹') toAdd = 'atan('; if (toAdd === 'x!') toAdd = '!';
            if (toAdd === '10□' || toAdd === '10^') toAdd = '10^'; if (toAdd === 'e□' || toAdd === 'e^') toAdd = 'e^';
            setInput(prev => (prev === '0' ? toAdd : prev + toAdd));
        }
        setIsShift(false); setIsAlpha(false);
    };

    // --- Micro-Adjusted UI Components ---
    const SilverControl = ({ label, subLabel, subColor = "text-amber-500", onClick }: { label: string, subLabel: string, subColor?: string, onClick: () => void }) => (
        <div className="flex flex-col items-center">
            <span className={`text-[6px] font-black uppercase mb-0.5 pointer-events-none ${subColor}`}>{subLabel}</span>
            <button onClick={onClick} className="w-7 h-5 rounded-full bg-gradient-to-b from-[#f8fafc] via-[#cbd5e1] to-[#64748b] border border-[#475569] shadow-[0_2px_3px_rgba(0,0,0,0.5)] active:translate-y-px transition-all flex items-center justify-center">
                <span className="text-[5px] text-slate-900 font-black uppercase">{label}</span>
            </button>
        </div>
    );

    const SciButton = ({ label, shiftLabel, alphaLabel, onClick }: { label: React.ReactNode, shiftLabel?: string, alphaLabel?: string, onClick: () => void }) => (
        <div className="flex flex-col items-center relative h-9">
            <div className="flex gap-1.5 absolute -top-2.5">
                {shiftLabel && <span className="text-[5px] font-black text-amber-500 uppercase">{shiftLabel}</span>}
                {alphaLabel && <span className="text-[5px] font-black text-rose-500 uppercase">{alphaLabel}</span>}
            </div>
            <button onClick={onClick} className="w-[42px] h-[25px] bg-[#1a1c20] text-white rounded-md text-[9px] font-bold border-t border-slate-700 shadow-[0_2px_3px_rgba(0,0,0,0.6)] active:bg-slate-800 transition-colors">
                <span className="opacity-90">{label}</span>
            </button>
        </div>
    );

    const MainButton = ({ label, shiftLabel, alphaLabel, onClick, color = "bg-[#cfd4d9]", textColor = "text-slate-900", fontSize = "text-lg" }: { label: string, shiftLabel?: string, alphaLabel?: string, onClick: () => void, color?: string, textColor?: string, fontSize?: string }) => (
        <div className="flex flex-col items-center relative h-11">
            <div className="flex gap-2 absolute -top-2.5">
                {shiftLabel && <span className="text-[5.5px] font-black text-amber-600 uppercase tracking-tighter">{shiftLabel}</span>}
                {alphaLabel && <span className="text-[5.5px] font-black text-rose-600 uppercase tracking-tighter">{alphaLabel}</span>}
            </div>
            <button onClick={onClick} className={`${color} ${textColor} w-[50px] h-[34px] rounded-lg font-black ${fontSize} shadow-[0_3px_0_rgba(0,0,0,0.4)] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center`}>
                <span className="drop-shadow-sm">{label}</span>
            </button>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }} exit={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }} drag dragMomentum={false} className="fixed left-1/2 top-1/2 z-[80] w-[320px] max-h-[90vh] bg-[#0c0d10] p-4 pb-6 rounded-[2.5rem] border-[5px] border-[#1f2128] shadow-[0_0_120px_rgba(0,0,0,1)] cursor-default select-none flex flex-col items-center overflow-y-auto custom-scrollbar-thin">
                    {/* Compact Brand & Solar Row */}
                    <div className="w-full flex justify-between items-center mb-1 px-2 shrink-0 h-8">
                        <div className="flex flex-col">
                            <h1 className="text-slate-100 font-extrabold text-[12px] tracking-tighter leading-none italic">CASIO</h1>
                            <div className="flex gap-1 items-center">
                                <span className="text-slate-400 text-[6px] font-bold">fx-991ES PLUS</span>
                                <span className="text-slate-500 text-[5px] font-black uppercase tracking-tighter">2nd ed.</span>
                            </div>
                        </div>
                        <div className="w-16 h-6 bg-[#2d1a1a] rounded-[1px] p-0.5 flex gap-0.5 border border-white/5 opacity-70 shadow-inner">
                            {[...Array(4)].map((_, i) => <div key={i} className="flex-1 bg-[#1a0f0f] border-x border-white/5" />)}
                        </div>
                        <button onClick={onClose} className="w-6 h-6 flex items-center justify-center bg-white/5 hover:bg-rose-500/20 rounded-full text-slate-600 hover:text-rose-400 transition-all border border-white/5 group">
                            <X size={12} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    {/* LCD Screen - More Compact */}
                    <div className="w-full bg-[#cbdcc1] h-[85px] rounded-lg mb-3 p-2 shrink-0 flex flex-col justify-between border-[3px] border-[#3a3f4a] shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)] relative font-serif">
                        <div className="flex justify-between items-start text-[7px] text-slate-800 font-black tracking-widest">
                            <div className="flex gap-2">
                                <span className={isShift ? "opacity-100" : "opacity-10"}>S</span>
                                <span className={isAlpha ? "opacity-100" : "opacity-10"}>A</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="border border-slate-900/50 px-0.5 tracking-tighter">R</span>
                                <span>Math ▲</span>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-center overflow-hidden py-1">
                            <div className="text-[20px] text-slate-950 w-full overflow-x-auto custom-scrollbar-thin flex items-center">
                                <InlineMath math={displayLatex} />
                            </div>
                            {result && <div className="w-full text-right text-[22px] font-black text-slate-950 pr-1">{result}</div>}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Proportional Control Row */}
                    <div className="w-full px-1 mb-6 flex justify-between items-center h-18 shrink-0">
                        <div className="flex flex-col gap-4">
                            <SilverControl label="Shift" subLabel="Shift" subColor="text-amber-500" onClick={() => setIsShift(!isShift)} />
                            <SilverControl label="Alpha" subLabel="Alpha" subColor="text-rose-500" onClick={() => setIsAlpha(!isAlpha)} />
                        </div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-slate-400 via-slate-200 to-slate-400 border-[3px] border-[#4e5663] shadow-[0_4px_12px_rgba(0,0,0,0.7)] flex items-center justify-center scale-90">
                            <div className="absolute inset-[8px] rounded-full bg-[#0c0d10] border-2 border-[#31363e] flex items-center justify-center overflow-hidden">
                                <span className="text-[5px] text-slate-700 font-black uppercase tracking-[0.3em] mt-1 opacity-40">REPLAY</span>
                                <button className="absolute top-0 w-full h-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400"><ChevronUp size={12} /></button>
                                <button className="absolute bottom-0 w-full h-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400"><ChevronDown size={12} /></button>
                                <button className="absolute left-0 h-full w-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400"><ChevronLeft size={12} /></button>
                                <button className="absolute right-0 h-full w-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400"><ChevronRight size={12} /></button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <SilverControl label="Mode" subLabel="Mode Setup" subColor="text-slate-400" onClick={() => { }} />
                            <SilverControl label="On" subLabel="On" subColor="text-slate-400" onClick={() => setInput('')} />
                        </div>
                    </div>

                    {/* Scientific Pad - More Airy Layout */}
                    <div className="w-full flex flex-col gap-4 px-1 mb-6 shrink-0">
                        <div className="flex justify-between px-3">
                            <div className="flex gap-4">
                                <SciButton label="CALC" shiftLabel="SOLVE" alphaLabel="=" onClick={() => handleKey('CALC', 'SOLVE', '=')} />
                                <SciButton label="∫dx" shiftLabel="d/dx" alphaLabel=":" onClick={() => handleKey('∫dx', 'd/dx', ':')} />
                            </div>
                            <div className="flex gap-4">
                                <SciButton label="x⁻¹" shiftLabel="x!" onClick={() => handleKey('^-1', '!')} />
                                <SciButton label="log□□" shiftLabel="Σ" onClick={() => handleKey('log(')} />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-x-1 gap-y-5 px-1">
                            <SciButton label="■/□" shiftLabel="▊/□" onClick={() => handleKey('/')} />
                            <SciButton label="√■" shiftLabel="∛■" onClick={() => handleKey('sqrt(', 'cbrt(')} />
                            <SciButton label="x²" shiftLabel="x³" onClick={() => handleKey('^2', '^3')} />
                            <SciButton label="x□" shiftLabel="▊√■" onClick={() => handleKey('^')} />
                            <SciButton label="log" shiftLabel="10□" onClick={() => handleKey('log(', '10^')} />
                            <SciButton label="ln" shiftLabel="e□" onClick={() => handleKey('ln(', 'e^')} />
                            <SciButton label="(-)" alphaLabel="A" onClick={() => handleKey('-', '', 'A')} />
                            <SciButton label={"°' \""} shiftLabel="←" alphaLabel="B" onClick={() => handleKey('°', '←', 'B')} />
                            <SciButton label="hyp" shiftLabel="Abs" alphaLabel="C" onClick={() => handleKey('hyp', 'Abs', 'C')} />
                            <SciButton label="sin" shiftLabel="sin⁻¹" alphaLabel="D" onClick={() => handleKey('sin(', 'sin⁻¹', 'D')} />
                            <SciButton label="cos" shiftLabel="cos⁻¹" alphaLabel="E" onClick={() => handleKey('cos(', 'cos⁻¹', 'E')} />
                            <SciButton label="tan" shiftLabel="tan⁻¹" alphaLabel="F" onClick={() => handleKey('tan(', 'tan⁻¹', 'F')} />
                            <SciButton label="RCL" shiftLabel="STO" onClick={() => { }} />
                            <SciButton label="ENG" shiftLabel="←" onClick={() => { }} />
                            <SciButton label="(" shiftLabel="%" onClick={() => handleKey('(')} />
                            <SciButton label=")" shiftLabel="," alphaLabel="X" onClick={() => handleKey(')')} />
                            <SciButton label="S⇔D" shiftLabel="a b/c⇔d/c" alphaLabel="Y" onClick={() => { }} />
                            <SciButton label="M+" shiftLabel="M-" alphaLabel="M" onClick={() => { }} />
                        </div>
                    </div>

                    {/* Numeric Pad - More Concrete Layout */}
                    <div className="w-full flex flex-col gap-4 px-1 shrink-0">
                        <div className="grid grid-cols-5 gap-2">
                            <MainButton label="7" shiftLabel="CONST" onClick={() => handleKey('7', 'CONST')} />
                            <MainButton label="8" shiftLabel="CONV" onClick={() => handleKey('8', 'CONV')} />
                            <MainButton label="9" shiftLabel="CLR" onClick={() => handleKey('9', 'CLR')} />
                            <MainButton label="DEL" shiftLabel="INS" color="bg-[#a3e635]" fontSize="text-sm" onClick={() => handleKey('DEL', 'INS')} />
                            <MainButton label="AC" shiftLabel="OFF" color="bg-[#a3e635]" fontSize="text-sm" onClick={() => handleKey('AC', 'AC')} />
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <MainButton label="4" alphaLabel="MATRIX" onClick={() => handleKey('4', '', 'MATRIX')} />
                            <MainButton label="5" alphaLabel="VECTOR" onClick={() => handleKey('5', '', 'VECTOR')} />
                            <MainButton label="6" onClick={() => handleKey('6')} />
                            <MainButton label="×" shiftLabel="nPr" onClick={() => handleKey('*', 'nPr')} />
                            <MainButton label="÷" shiftLabel="nCr" onClick={() => handleKey('/', 'nCr')} />
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <MainButton label="1" alphaLabel="STAT" onClick={() => handleKey('1', '', 'STAT')} />
                            <MainButton label="2" alphaLabel="CMPLX" onClick={() => handleKey('2', '', 'CMPLX')} />
                            <MainButton label="3" alphaLabel="BASE" onClick={() => handleKey('3', '', 'BASE')} />
                            <MainButton label="+" shiftLabel="Pol" onClick={() => handleKey('+', 'Pol')} />
                            <MainButton label="−" shiftLabel="Rec" onClick={() => handleKey('-', 'Rec')} />
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <MainButton label="0" shiftLabel="Rnd" onClick={() => handleKey('0', 'Rnd')} />
                            <MainButton label="." shiftLabel="Ran#" onClick={() => handleKey('.', 'Ran#')} />
                            <MainButton label="×10ˣ" shiftLabel="π" alphaLabel="e" fontSize="text-sm" onClick={() => handleKey('*10^', 'pi', 'e')} />
                            <MainButton label="Ans" shiftLabel="DRG▶" fontSize="text-sm" onClick={() => handleKey('Ans', 'DRG')} />
                            <MainButton label="=" onClick={() => handleKey('=')} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
