import React, { useState, useEffect } from 'react';
import { Flag, Minus, Plus, QrCode, Copy, Download, Share2 } from 'lucide-react';

const SetupScreen = ({
    initialState = 'initial', // 'initial', 'input', 'generated'
    defaultValues = { name: '', holes: 18, strokes: 72 }
}) => {
    const [courseName, setCourseName] = useState(defaultValues.name);
    const [holeCount, setHoleCount] = useState(defaultValues.holes);
    const [maxStrokes, setMaxStrokes] = useState(defaultValues.strokes);
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Debounce effect for URL generation simulation
    useEffect(() => {
        if (courseName && courseName.length > 0) {
            setIsTyping(true);
            const timer = setTimeout(() => {
                const slug = courseName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                setGeneratedUrl(`puttputt.app/play/${slug}`);
                setIsTyping(false);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setGeneratedUrl('puttputt.app/play/...');
        }
    }, [courseName]);

    const isGenerated = initialState === 'generated';
    const isActive = initialState === 'input' || isGenerated || courseName.length > 0;

    // Dynamic styles based on state
    const nameInputBorder = isActive || initialState === 'input'
        ? 'border-signal-blue ring-4 ring-blue-500/10'
        : 'border-gray-300';

    return (
        <div className="flex flex-col h-full bg-sage-mist px-4 pt-4 pb-8 relative">

            {/* Header */}
            <header className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-evergreen-deep rounded-xl flex items-center justify-center shadow-lg shadow-evergreen-deep/20">
                    <Flag className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-evergreen-deep tracking-tight">Course Setup</h1>
                    <p className="text-xs text-slate-neutral font-medium">Manager Mode</p>
                </div>
            </header>

            {/* Main Card */}
            <div className={`bg-white rounded-2xl shadow-card p-5 transition-all duration-500 ease-out ${isGenerated ? 'pb-8' : ''}`}>

                {/* Input Group */}
                <div className="space-y-6">

                    {/* Course Name */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-neutral uppercase tracking-wider block">
                            Course Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                placeholder="e.g. Pine Valley"
                                autoFocus={initialState === 'input'}
                                className={`w-full h-12 px-4 rounded-lg bg-white border ${nameInputBorder} text-ink-black placeholder:text-gray-300 transition-all duration-200 focus:outline-none text-base`}
                            />
                            {/* Pulse Indicator for Initial/Active states */}
                            {(initialState === 'input' || (courseName && !isGenerated)) && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                                    {isTyping && <div className="w-1.5 h-1.5 bg-signal-blue rounded-full animate-bounce"></div>}
                                </div>
                            )}
                            {/* Validation Check */}
                            {isGenerated && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-success-emerald">
                                    <div className="w-5 h-5 bg-success-emerald/10 rounded-full flex items-center justify-center">
                                        <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-success-emerald -rotate-45 mb-0.5"></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Live URL Preview */}
                        <div className={`transition-all duration-300 overflow-hidden ${isActive ? 'opacity-100 max-h-8' : 'opacity-50 max-h-8'}`}>
                            <p className="text-xs font-mono text-slate-neutral truncate flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-success-emerald"></span>
                                {generatedUrl}
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-stroke-gray/60"></div>

                    {/* Steppers Row */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* Holes */}
                        <div className="space-y-3">
                            <label className="text-xs font-semibold text-slate-neutral uppercase tracking-wider block text-center">
                                Hole Count
                            </label>
                            <div className="flex items-center justify-between bg-mint-surface rounded-xl p-1">
                                <button
                                    onClick={() => setHoleCount(Math.max(1, holeCount - 9))}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-evergreen-deep shadow-sm active:scale-95 transition-transform"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="font-mono font-bold text-lg text-ink-black tabular-nums">{holeCount}</span>
                                <button
                                    onClick={() => setHoleCount(holeCount + 9)}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-evergreen-deep text-white shadow-md shadow-evergreen-deep/20 active:scale-95 transition-transform"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Par/Strokes */}
                        <div className="space-y-3">
                            <label className="text-xs font-semibold text-slate-neutral uppercase tracking-wider block text-center">
                                Max Strokes
                            </label>
                            <div className="flex items-center justify-between bg-mint-surface rounded-xl p-1">
                                <button
                                    onClick={() => setMaxStrokes(Math.max(1, maxStrokes - 1))}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-evergreen-deep shadow-sm active:scale-95 transition-transform"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="font-mono font-bold text-lg text-ink-black tabular-nums">{maxStrokes}</span>
                                <button
                                    onClick={() => setMaxStrokes(maxStrokes + 1)}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-evergreen-deep text-white shadow-md shadow-evergreen-deep/20 active:scale-95 transition-transform"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                {/* QR Section (Only visible in 'generated' state) */}
                {isGenerated && (
                    <div className="mt-8 pt-6 border-t border-dashed border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center gap-4 relative group cursor-pointer hover:border-signal-blue transition-colors">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[10px] font-bold text-slate-neutral uppercase tracking-widest">
                                Scan to Join
                            </div>
                            <QrCode className="w-32 h-32 text-ink-black opacity-90" strokeWidth={1.5} />

                            <div className="flex items-center gap-2 text-xs font-medium text-slate-neutral bg-gray-50 px-3 py-1.5 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-success-emerald"></span>
                                Session Active
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mt-6">
                            <button className="w-full h-13 bg-evergreen-deep text-white font-medium rounded-xl shadow-lg shadow-evergreen-deep/20 hover:bg-[#0E2E26] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5">
                                <Download className="w-5 h-5" />
                                Download Print Card
                            </button>

                            <button className="w-full h-13 bg-white border border-gray-200 text-evergreen-deep font-medium rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5">
                                <Copy className="w-5 h-5" />
                                Copy Game Link
                            </button>
                        </div>
                    </div>
                )}

            </div>

            {/* Disclaimer / Footer */}
            {!isGenerated && (
                <div className="mt-auto mb-4 text-center">
                    <p className="text-[10px] text-slate-neutral/60 font-medium">
                        No login required. Session expires in 24h.
                    </p>
                </div>
            )}

        </div>
    );
};

export default SetupScreen;
