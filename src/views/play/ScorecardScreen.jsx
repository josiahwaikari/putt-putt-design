import React from 'react';
import { ChevronLeft, ChevronRight, Plus, Minus, Flag } from 'lucide-react';

const PlayerCard = ({ player, state, isTarget }) => {
    // Visual changes based on state for target player
    const scoreColor = (state === 'limit' && isTarget)
        ? 'text-error-crimson' // State 3
        : 'text-ink-black';

    const scoreScale = (state === 'scoring' && isTarget)
        ? 'scale-110 text-signal-blue' // State 2 (simulated spring)
        : (state === 'limit' && isTarget) ? 'animate-shake' : 'scale-100';

    const plusBtnOpacity = (state === 'limit' && isTarget) ? 'opacity-50 cursor-not-allowed' : 'opacity-100';
    const plusBtnColor = (state === 'scoring' && isTarget) ? 'bg-gray-200' : 'bg-mint-surface'; // Active press state
    const cardBorder = (state === 'active' && isTarget) ? 'ring-2 ring-signal-blue ring-offset-2' : '';

    return (
        <div className={`bg-white rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-stroke-gray flex items-center justify-between ${cardBorder}`}>
            {/* Left Side: Name & Total */}
            <div className="flex flex-col">
                <span className="text-ink-black font-semibold text-lg truncate max-w-[120px]">{player.name}</span>
                <span className="text-slate-neutral text-xs font-medium mt-0.5">Total: {player.total}</span>
            </div>

            {/* Right Side: Scoring Control */}
            <div className="flex items-center gap-5">
                {/* Minus */}
                <button className="w-11 h-11 rounded-full flex items-center justify-center bg-gray-50 border border-gray-100 text-evergreen-deep active:scale-90 transition-transform">
                    <Minus className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Score Display */}
                <span className={`font-mono text-[32px] font-bold tracking-tight w-12 text-center transition-all duration-300 ${scoreColor} ${scoreScale}`}>
                    {player.score}
                </span>

                {/* Plus */}
                <button
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-evergreen-deep transition-all active:scale-90 ${plusBtnColor} ${plusBtnOpacity}`}
                >
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                </button>
            </div>
        </div>
    );
};

const ScorecardScreen = ({ state = 'active' }) => {
    // states: 'active', 'scoring', 'limit', 'transition'

    const isTransition = state === 'transition';

    // Mock Data - Hole 1
    const playersHole1 = [
        { id: 1, name: 'Dave', score: state === 'scoring' ? 4 : state === 'limit' ? 10 : 3, total: 12 },
        { id: 2, name: 'Sarah', score: 3, total: 10 },
        { id: 3, name: 'Mike', score: 4, total: 14 },
    ];

    // Mock Data - Hole 2 (For transition)
    const playersHole2 = [
        { id: 1, name: 'Dave', score: 0, total: 12 },
        { id: 2, name: 'Sarah', score: 0, total: 10 },
        { id: 3, name: 'Mike', score: 0, total: 14 },
    ];

    return (
        <div className="relative w-full h-full bg-sage-mist flex flex-col font-sans overflow-hidden">

            {/* Top Bar (Fixed) */}
            <div className="h-24 bg-evergreen-deep w-full relative shrink-0 pt-10 px-4 flex items-center justify-between z-20 shadow-md">
                <button className="text-white/70 hover:text-white transition-colors p-2">
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Hole Title - Slot Machine Effect for Transition */}
                <div className="flex flex-col items-center h-8 overflow-hidden relative w-32">
                    <div className={`transition-transform duration-500 ease-out ${isTransition ? '-translate-y-8' : 'translate-y-0'}`}>
                        <span className="block text-white text-lg font-semibold tracking-wide h-8 flex items-center justify-center">Hole 1</span>
                        <span className="block text-white text-lg font-semibold tracking-wide h-8 flex items-center justify-center">Hole 2</span>
                    </div>
                </div>

                <button className="text-white/70 hover:text-white transition-colors p-2">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Sub-header info */}
            <div className="bg-evergreen-deep/95 backdrop-blur-sm text-white/80 text-xs py-2 px-6 flex justify-between items-center shrink-0 z-10 transition-opacity duration-300">
                <div className="flex items-center gap-1.5">
                    <Flag className="w-3.5 h-3.5" />
                    <span>PAR {isTransition ? '5' : '4'}</span>
                </div>
                <span>{isTransition ? '490' : '342'} YARDS</span>
            </div>

            <div className="relative flex-1 overflow-hidden w-full">

                {/* Max Limit Toast */}
                {state === 'limit' && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-ink-black/90 backdrop-blur text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg z-30 animate-in fade-in slide-in-from-top-2">
                        Max strokes reached
                    </div>
                )}

                {/* Container for Hole 1 List (Exiting) */}
                <div
                    className={`absolute inset-0 p-4 space-y-4 overflow-y-auto transition-transform duration-500 ease-out 
                    ${isTransition ? '-translate-x-full opacity-50' : 'translate-x-0 opacity-100'}`}
                >
                    {playersHole1.map((player) => (
                        <PlayerCard
                            key={`h1-${player.id}`}
                            player={player}
                            state={state}
                            isTarget={player.name === 'Dave'}
                        />
                    ))}
                </div>

                {/* Container for Hole 2 List (Entering) */}
                <div
                    className={`absolute inset-0 p-4 space-y-4 overflow-y-auto transition-transform duration-500 ease-out 
                    ${isTransition ? 'translate-x-0 opacity-100 delay-100' : 'translate-x-full opacity-0'}`}
                >
                    {playersHole2.map((player) => (
                        <PlayerCard
                            key={`h2-${player.id}`}
                            player={player}
                            state="active" // New hole starts active
                            isTarget={false}
                        />
                    ))}
                </div>

            </div>

            {/* Fixed Bottom Bar */}
            <div className="bg-white p-4 pb-8 border-t border-gray-100 shrink-0 z-20">
                <button
                    className={`w-full h-[52px] bg-signal-blue text-white rounded-xl font-semibold text-lg shadow-lg shadow-signal-blue/20 flex items-center justify-center active:scale-[0.98] transition-all
                    ${isTransition ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} duration-300`}
                >
                    Next Hole
                </button>
            </div>

        </div>
    );
};

export default ScorecardScreen;
