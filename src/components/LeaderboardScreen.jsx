import React, { useState } from 'react';
import { Trophy, RotateCcw, Users, AlertCircle } from 'lucide-react';
import Confetti from './Confetti';

const LeaderboardScreen = ({
    players,
    onPlayAgain,
    onNewGroup,
    state = 'celebration' // 'celebration', 'decision', 'modal'
}) => {
    // Sort players by score
    const sortedPlayers = [...players].sort((a, b) => a.score - b.score);
    const winner = sortedPlayers[0];

    const showModal = state === 'modal';
    const showConfetti = state === 'celebration';

    return (
        <div className="flex flex-col h-full bg-sage-mist relative overflow-hidden font-sans">
            {/* Confetti Layer */}
            <Confetti active={showConfetti} />

            {/* Header */}
            <header className="bg-evergreen-deep pt-12 pb-6 px-6 shadow-md z-10">
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-white text-2xl font-bold">Final Results</h1>
                </div>
                <p className="text-white/80 text-sm">Game Complete • Par 72</p>
            </header>

            {/* Leaderboard List */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                {sortedPlayers.map((player, index) => {
                    const isWinner = index === 0;
                    return (
                        <div
                            key={player.id}
                            className={`
                relative flex items-center justify-between p-4 rounded-2xl bg-white shadow-card
                transition-all duration-500 ease-out
                ${isWinner ? 'border-2 border-birdie-gold bg-gradient-to-br from-white to-orange-50/50' : 'border border-stroke-gray'}
              `}
                            style={{
                                top: state === 'celebration' ? `${index * 10}px` : '0', // Subtle staggered entry simulation
                                opacity: 1,
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mint-surface text-evergreen-deep font-bold font-mono">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className={`font-semibold text-lg ${isWinner ? 'text-ink-black' : 'text-slate-neutral'}`}>
                                        {player.name}
                                    </h3>
                                    {isWinner && (
                                        <span className="text-xs font-bold text-birdie-gold flex items-center gap-1 mt-0.5">
                                            <Trophy size={12} fill="currentColor" />
                                            WINNER
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-baseline gap-1">
                                <span className={`text-2xl font-bold font-mono ${isWinner ? 'text-evergreen-deep' : 'text-slate-neutral'}`}>
                                    {player.score}
                                </span>
                                <span className="text-sm font-medium text-slate-neutral">
                                    {player.score > 0 ? `+${player.score}` : player.score}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Actions (The Decision) */}
            {(state === 'decision' || state === 'modal') && (
                <div className="bg-white border-t border-stroke-gray p-6 pb-8 space-y-3 z-20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                    <button
                        onClick={onPlayAgain}
                        className="w-full h-[52px] bg-signal-blue text-white rounded-xl font-medium text-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={20} />
                        Play Again
                    </button>

                    <button
                        onClick={onNewGroup}
                        className="w-full h-[52px] bg-white border border-error-crimson text-error-crimson rounded-xl font-medium text-lg active:bg-red-50 transition-colors flex items-center justify-center gap-2"
                    >
                        <Users size={20} />
                        New Group
                    </button>
                </div>
            )}

            {/* Native-style Modal Simulation */}
            {showModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center px-8 bg-black/40 backdrop-blur-[2px]">
                    <div className="bg-white/95 backdrop-blur-xl w-full max-w-[320px] rounded-[14px] text-center overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-ink-black mb-1">New Group?</h3>
                            <p className="text-sm text-slate-neutral">
                                Are you sure? This will delete all current names and scores.
                            </p>
                        </div>
                        <div className="flex border-t border-gray-300">
                            <button
                                onClick={onNewGroup} // Just closes/resets in this demo context
                                className="flex-1 py-3.5 text-blue-600 font-regular text-[17px] active:bg-gray-100 border-r border-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-1 py-3.5 text-red-600 font-semibold text-[17px] active:bg-gray-100"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaderboardScreen;
