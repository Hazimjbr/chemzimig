'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, RotateCcw } from 'lucide-react';

interface ChemistryCalculatorProps {
    isOpen: boolean;
    onClose: () => void;
}

type TabType = 'moles' | 'concentration' | 'dilution' | 'yield' | 'atomeconomy' | 'uncertainty' | 'ph';

export default function ChemistryCalculator({ isOpen, onClose }: ChemistryCalculatorProps) {
    const [activeTab, setActiveTab] = useState<TabType>('moles');

    // State for Moles/Mass tab: n = m / Mr
    const [molesState, setMolesState] = useState({ mass: '', molarMass: '', moles: '' });
    // State for Concentration tab: C = n / V
    const [concState, setConcState] = useState({ concentration: '', moles: '', volume: '' });
    // State for Dilution tab: C1 * V1 = C2 * V2
    const [dilState, setDilState] = useState({ c1: '', v1: '', c2: '', v2: '' });
    // State for Yield tab: (Actual / Theoretical) * 100
    const [yieldState, setYieldState] = useState({ actual: '', theoretical: '', pct: '' });
    // State for Atom Economy tab: (Desired / Total) * 100
    const [aeState, setAeState] = useState({ desired: '', totalReactants: '', pct: '' });
    // State for Uncertainty tab: (Absolute / Measured) * 100
    const [uncState, setUncState] = useState({ absolute: '', measured: '', pct: '', readings: '1' });
    // State for pH & pOH tab
    const [phState, setPhState] = useState({ ph: '', hConc: '', poh: '', ohConc: '' });

    const [result, setResult] = useState<{ value: string; unit: string; formula: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const resetValues = () => {
        setMolesState({ mass: '', molarMass: '', moles: '' });
        setConcState({ concentration: '', moles: '', volume: '' });
        setDilState({ c1: '', v1: '', c2: '', v2: '' });
        setYieldState({ actual: '', theoretical: '', pct: '' });
        setAeState({ desired: '', totalReactants: '', pct: '' });
        setUncState({ absolute: '', measured: '', pct: '', readings: '1' });
        setPhState({ ph: '', hConc: '', poh: '', ohConc: '' });
        setResult(null);
        setError(null);
    };

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
        setResult(null);
        setError(null);
    };

    const handleCalculate = () => {
        setError(null);
        setResult(null);

        try {
            if (activeTab === 'moles') {
                const { mass, molarMass, moles } = molesState;
                const m = parseFloat(mass);
                const M = parseFloat(molarMass);
                const n = parseFloat(moles);

                const filled = [mass, molarMass, moles].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!moles && m && M) {
                    if (M <= 0) throw new Error('Molar mass must be greater than zero.');
                    setResult({
                        value: (m / M).toFixed(4),
                        unit: 'mol',
                        formula: 'n = m / Mr'
                    });
                } else if (!mass && n && M) {
                    if (n < 0 || M <= 0) throw new Error('Invalid input values.');
                    setResult({
                        value: (n * M).toFixed(4),
                        unit: 'g',
                        formula: 'm = n × Mr'
                    });
                } else if (!molarMass && m && n) {
                    if (n <= 0) throw new Error('Moles must be greater than zero.');
                    setResult({
                        value: (m / n).toFixed(4),
                        unit: 'g/mol',
                        formula: 'Mr = m / n'
                    });
                }
            } else if (activeTab === 'concentration') {
                const { concentration, moles, volume } = concState;
                const C = parseFloat(concentration);
                const n = parseFloat(moles);
                const V = parseFloat(volume);

                const filled = [concentration, moles, volume].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!concentration && n && V) {
                    if (V <= 0) throw new Error('Volume must be greater than zero.');
                    setResult({
                        value: (n / V).toFixed(4),
                        unit: 'mol/dm³ (M)',
                        formula: 'C = n / V'
                    });
                } else if (!moles && C && V) {
                    if (C < 0 || V <= 0) throw new Error('Invalid input values.');
                    setResult({
                        value: (C * V).toFixed(4),
                        unit: 'mol',
                        formula: 'n = C × V'
                    });
                } else if (!volume && C && n) {
                    if (C <= 0) throw new Error('Concentration must be greater than zero.');
                    setResult({
                        value: (n / C).toFixed(4),
                        unit: 'dm³ (L)',
                        formula: 'V = n / C'
                    });
                }
            } else if (activeTab === 'dilution') {
                const { c1, v1, c2, v2 } = dilState;
                const C1 = parseFloat(c1);
                const V1 = parseFloat(v1);
                const C2 = parseFloat(c2);
                const V2 = parseFloat(v2);

                const filled = [c1, v1, c2, v2].filter(x => x !== '').length;
                if (filled !== 3) {
                    setError('Please fill exactly three fields.');
                    return;
                }

                if (!c1 && V1 && C2 && V2) {
                    if (V1 <= 0) throw new Error('Volume V1 must be greater than zero.');
                    setResult({
                        value: ((C2 * V2) / V1).toFixed(4),
                        unit: 'mol/dm³ (C₁)',
                        formula: 'C₁ = (C₂ × V₂) / V₁'
                    });
                } else if (!v1 && C1 && C2 && V2) {
                    if (C1 <= 0) throw new Error('Concentration C1 must be greater than zero.');
                    setResult({
                        value: ((C2 * V2) / C1).toFixed(4),
                        unit: 'V₁',
                        formula: 'V₁ = (C₂ × V₂) / C₁'
                    });
                } else if (!c2 && C1 && V1 && V2) {
                    if (V2 <= 0) throw new Error('Volume V2 must be greater than zero.');
                    setResult({
                        value: ((C1 * V1) / V2).toFixed(4),
                        unit: 'mol/dm³ (C₂)',
                        formula: 'C₂ = (C₁ × V₁) / V₂'
                    });
                } else if (!v2 && C1 && V1 && C2) {
                    if (C2 <= 0) throw new Error('Concentration C2 must be greater than zero.');
                    setResult({
                        value: ((C1 * V1) / C2).toFixed(4),
                        unit: 'V₂',
                        formula: 'V₂ = (C₁ × V₁) / C₂'
                    });
                }
            } else if (activeTab === 'yield') {
                const { actual, theoretical, pct } = yieldState;
                const act = parseFloat(actual);
                const theo = parseFloat(theoretical);
                const p = parseFloat(pct);

                const filled = [actual, theoretical, pct].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!pct && act && theo) {
                    if (theo <= 0) throw new Error('Theoretical yield must be greater than zero.');
                    setResult({
                        value: ((act / theo) * 100).toFixed(2),
                        unit: '%',
                        formula: '% Yield = (Actual / Theoretical) × 100'
                    });
                } else if (!actual && p && theo) {
                    if (theo <= 0 || p < 0) throw new Error('Invalid input values.');
                    setResult({
                        value: ((p * theo) / 100).toFixed(4),
                        unit: 'g',
                        formula: 'Actual = (% Yield × Theoretical) / 100'
                    });
                } else if (!theoretical && act && p) {
                    if (p <= 0) throw new Error('Percentage yield must be greater than zero.');
                    setResult({
                        value: ((act * 100) / p).toFixed(4),
                        unit: 'g',
                        formula: 'Theoretical = (Actual × 100) / % Yield'
                    });
                }
            } else if (activeTab === 'atomeconomy') {
                const { desired, totalReactants, pct } = aeState;
                const des = parseFloat(desired);
                const tot = parseFloat(totalReactants);
                const p = parseFloat(pct);

                const filled = [desired, totalReactants, pct].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two fields.');
                    return;
                }

                if (!pct && des && tot) {
                    if (tot <= 0) throw new Error('Total reactants Mr must be greater than zero.');
                    setResult({
                        value: ((des / tot) * 100).toFixed(2),
                        unit: '%',
                        formula: '% Atom Economy = (Desired Mr / Total Mr) × 100'
                    });
                } else if (!desired && p && tot) {
                    if (tot <= 0 || p < 0) throw new Error('Invalid input values.');
                    setResult({
                        value: ((p * tot) / 100).toFixed(4),
                        unit: 'g/mol (Mr)',
                        formula: 'Desired Mr = (% AE × Total Mr) / 100'
                    });
                } else if (!totalReactants && des && p) {
                    if (p <= 0) throw new Error('Atom economy must be greater than zero.');
                    setResult({
                        value: ((des * 100) / p).toFixed(4),
                        unit: 'g/mol (Mr)',
                        formula: 'Total Mr = (Desired Mr × 100) / % AE'
                    });
                }
            } else if (activeTab === 'uncertainty') {
                const { absolute, measured, pct, readings } = uncState;
                const abs = parseFloat(absolute);
                const meas = parseFloat(measured);
                const p = parseFloat(pct);
                const nReadings = parseFloat(readings) || 1;

                const filled = [absolute, measured, pct].filter(x => x !== '').length;
                if (filled !== 2) {
                    setError('Please fill exactly two of Absolute Uncertainty, Measured Value, or Percentage Uncertainty.');
                    return;
                }

                if (!pct && abs && meas) {
                    if (meas <= 0) throw new Error('Measured value must be greater than zero.');
                    setResult({
                        value: (((abs * nReadings) / meas) * 100).toFixed(2),
                        unit: '%',
                        formula: '% Uncertainty = (Abs Error × Readings / Value) × 100'
                    });
                } else if (!absolute && p && meas) {
                    if (meas <= 0 || p < 0) throw new Error('Invalid input values.');
                    setResult({
                        value: ((p * meas) / (100 * nReadings)).toFixed(4),
                        unit: 'units',
                        formula: 'Abs Error = (% Uncertainty × Value) / (100 × Readings)'
                    });
                } else if (!measured && abs && p) {
                    if (p <= 0) throw new Error('Percentage uncertainty must be greater than zero.');
                    setResult({
                        value: (((abs * nReadings) * 100) / p).toFixed(4),
                        unit: 'units',
                        formula: 'Value = (Abs Error × Readings × 100) / % Uncertainty'
                    });
                }
            } else if (activeTab === 'ph') {
                const { ph, hConc, poh, ohConc } = phState;
                const p = parseFloat(ph);
                const h = parseFloat(hConc);
                const po = parseFloat(poh);
                const oh = parseFloat(ohConc);

                const filled = [ph, hConc, poh, ohConc].filter(x => x !== '').length;
                if (filled !== 1) {
                    setError('Please fill exactly one field to solve for all others.');
                    return;
                }

                let finalPh = 0;

                if (ph) {
                    finalPh = p;
                } else if (hConc) {
                    if (h <= 0) throw new Error('H+ concentration must be greater than zero.');
                    finalPh = -Math.log10(h);
                } else if (poh) {
                    finalPh = 14 - po;
                } else if (ohConc) {
                    if (oh <= 0) throw new Error('OH- concentration must be greater than zero.');
                    finalPh = 14 - (-Math.log10(oh));
                }

                const finalPoh = 14 - finalPh;
                const finalH = Math.pow(10, -finalPh);
                const finalOh = Math.pow(10, -finalPoh);

                setResult({
                    value: `pH: ${finalPh.toFixed(2)} | pOH: ${finalPoh.toFixed(2)}\n[H⁺]: ${finalH.toExponential(4)} mol/dm³\n[OH⁻]: ${finalOh.toExponential(4)} mol/dm³`,
                    unit: 'All values solved',
                    formula: 'pH = -log[H⁺], pH + pOH = 14'
                });
            }
        } catch (err: any) {
            setError(err.message || 'Calculation error. Please check inputs.');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                    />

                    {/* Calculator Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                        exit={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
                        className="fixed left-1/2 top-1/2 z-[61] w-[95vw] max-w-[485px] bg-[#0a0a1a]/95 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.25)] overflow-hidden flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-indigo-500/10 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-indigo-500/20 rounded-xl text-indigo-400">
                                    <Calculator size={22} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white tracking-tight font-[family-name:var(--font-space-grotesk)]">
                                        Chemistry Calculator
                                    </h2>
                                    <p className="text-xs text-slate-400 font-medium">Quick stoichiometric & solution calculations</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Tabs Bar */}
                        <div className="flex gap-2 p-2 bg-white/5 border-b border-white/5 text-[10px] overflow-x-auto scrollbar-none whitespace-nowrap">
                            {(['moles', 'concentration', 'dilution', 'yield', 'atomeconomy', 'uncertainty', 'ph'] as TabType[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`py-2 px-3.5 rounded-lg font-semibold transition-all inline-block ${
                                        activeTab === tab
                                            ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {tab === 'moles' && 'Moles & Mass'}
                                    {tab === 'concentration' && 'Concentration'}
                                    {tab === 'dilution' && 'Dilution'}
                                    {tab === 'yield' && 'Percent Yield'}
                                    {tab === 'atomeconomy' && 'Atom Economy'}
                                    {tab === 'uncertainty' && 'Uncertainty %'}
                                    {tab === 'ph' && 'pH & pOH'}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex-1 flex flex-col gap-5 overflow-y-auto max-h-[60vh] custom-scrollbar">
                            {/* Formula Box */}
                            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-4 text-center">
                                <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">Formula</span>
                                <div className="text-xl font-bold text-white mt-1 font-mono tracking-wide">
                                    {activeTab === 'moles' && 'n = m / Mr'}
                                    {activeTab === 'concentration' && 'C = n / V'}
                                    {activeTab === 'dilution' && 'C₁V₁ = C₂V₂'}
                                    {activeTab === 'yield' && '% Yield = (Act/Theo) × 100'}
                                    {activeTab === 'atomeconomy' && '% AE = (Desired Mr / Total Mr) × 100'}
                                    {activeTab === 'uncertainty' && '% Uncertainty = (Abs Error × Readings / Value) × 100'}
                                    {activeTab === 'ph' && 'pH = -log[H⁺] | pH + pOH = 14'}
                                </div>
                                <p className="text-[10px] text-slate-500 mt-2">
                                    {activeTab === 'dilution' && '💡 Fill exactly three values to calculate the remaining unknown.'}
                                    {activeTab === 'ph' && '💡 Fill exactly one value to solve for all remaining values.'}
                                    {activeTab !== 'dilution' && activeTab !== 'ph' && '💡 Fill exactly two values and leave the target field empty.'}
                                </p>
                            </div>

                            {/* Inputs */}
                            <div className="flex flex-col gap-4 text-left">
                                {activeTab === 'moles' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Mass</span>
                                                <span className="text-slate-500 font-normal">m (g)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={molesState.mass}
                                                onChange={e => setMolesState(prev => ({ ...prev, mass: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Molar Mass</span>
                                                <span className="text-slate-500 font-normal">Mr (g/mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={molesState.molarMass}
                                                onChange={e => setMolesState(prev => ({ ...prev, molarMass: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Moles</span>
                                                <span className="text-slate-500 font-normal">n (mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={molesState.moles}
                                                onChange={e => setMolesState(prev => ({ ...prev, moles: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'concentration' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Concentration</span>
                                                <span className="text-slate-500 font-normal">C (mol/dm³)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={concState.concentration}
                                                onChange={e => setConcState(prev => ({ ...prev, concentration: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Moles</span>
                                                <span className="text-slate-500 font-normal">n (mol)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={concState.moles}
                                                onChange={e => setConcState(prev => ({ ...prev, moles: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Volume</span>
                                                <span className="text-slate-500 font-normal">V (dm³ or L)</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={concState.volume}
                                                onChange={e => setConcState(prev => ({ ...prev, volume: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'dilution' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Initial Conc. C₁</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="C₁"
                                                    value={dilState.c1}
                                                    onChange={e => setDilState(prev => ({ ...prev, c1: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Initial Vol. V₁</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="V₁"
                                                    value={dilState.v1}
                                                    onChange={e => setDilState(prev => ({ ...prev, v1: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Final Conc. C₂</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="C₂"
                                                    value={dilState.c2}
                                                    onChange={e => setDilState(prev => ({ ...prev, c2: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                    <span>Final Vol. V₂</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="V₂"
                                                    value={dilState.v2}
                                                    onChange={e => setDilState(prev => ({ ...prev, v2: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'yield' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Actual Yield</span>
                                                <span className="text-slate-500 font-normal">g</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={yieldState.actual}
                                                onChange={e => setYieldState(prev => ({ ...prev, actual: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Theoretical Yield</span>
                                                <span className="text-slate-500 font-normal">g</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={yieldState.theoretical}
                                                onChange={e => setYieldState(prev => ({ ...prev, theoretical: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Percentage Yield</span>
                                                <span className="text-slate-500 font-normal">%</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={yieldState.pct}
                                                onChange={e => setYieldState(prev => ({ ...prev, pct: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'atomeconomy' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Desired Product Mr</span>
                                                <span className="text-slate-500 font-normal">g/mol</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={aeState.desired}
                                                onChange={e => setAeState(prev => ({ ...prev, desired: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Total Reactants Mr</span>
                                                <span className="text-slate-500 font-normal">g/mol</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={aeState.totalReactants}
                                                onChange={e => setAeState(prev => ({ ...prev, totalReactants: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Atom Economy</span>
                                                <span className="text-slate-500 font-normal">%</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={aeState.pct}
                                                onChange={e => setAeState(prev => ({ ...prev, pct: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'uncertainty' && (
                                    <>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Absolute Uncertainty (per reading)</span>
                                                <span className="text-slate-500 font-normal">e.g. ±0.05</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={uncState.absolute}
                                                onChange={e => setUncState(prev => ({ ...prev, absolute: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Number of Readings</span>
                                                <span className="text-slate-500 font-normal">e.g. 2 for burette titration, 1 for pipette</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="1"
                                                min="1"
                                                placeholder="Number of readings..."
                                                value={uncState.readings}
                                                onChange={e => setUncState(prev => ({ ...prev, readings: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Measured Value</span>
                                                <span className="text-slate-500 font-normal">value</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={uncState.measured}
                                                onChange={e => setUncState(prev => ({ ...prev, measured: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 text-left">
                                            <label className="text-xs text-slate-400 font-semibold flex justify-between">
                                                <span>Percentage Uncertainty</span>
                                                <span className="text-slate-500 font-normal">%</span>
                                            </label>
                                            <input
                                                type="number"
                                                step="any"
                                                placeholder="Leave blank to calculate..."
                                                value={uncState.pct}
                                                onChange={e => setUncState(prev => ({ ...prev, pct: e.target.value }))}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left"
                                            />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'ph' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>pH Value</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="pH"
                                                    value={phState.ph}
                                                    onChange={e => setPhState(prev => ({ ...prev, ph: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>pOH Value</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="pOH"
                                                    value={phState.poh}
                                                    onChange={e => setPhState(prev => ({ ...prev, poh: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 text-left">
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>[H⁺] (mol/dm³)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 1e-7"
                                                    value={phState.hConc}
                                                    onChange={e => setPhState(prev => ({ ...prev, hConc: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5 text-left">
                                                <label className="text-xs text-slate-400 font-semibold">
                                                    <span>[OH⁻] (mol/dm³)</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    step="any"
                                                    placeholder="e.g. 1e-7"
                                                    value={phState.ohConc}
                                                    onChange={e => setPhState(prev => ({ ...prev, ohConc: e.target.value }))}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-sm text-left font-mono"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 mt-2">
                                <button
                                    onClick={handleCalculate}
                                    className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-95 transition-all text-sm"
                                >
                                    Calculate
                                </button>
                                <button
                                    onClick={resetValues}
                                    className="px-4 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl border border-white/10 transition-all flex items-center justify-center"
                                    title="Reset"
                                >
                                    <RotateCcw size={18} />
                                </button>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs text-center">
                                    ⚠️ {error}
                                </div>
                            )}

                            {/* Result Display */}
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-center mt-2"
                                >
                                    <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Result</span>
                                    <div className="text-xl font-bold text-white mt-1 font-mono whitespace-pre-line leading-relaxed">
                                        {result.value}
                                    </div>
                                    <span className="text-xs text-emerald-400 font-medium block mt-1 font-mono">
                                        {result.unit}
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
