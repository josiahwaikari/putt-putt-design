import React from 'react';
import ManagerModeScreen from '../components/ManagerModeScreen';
import PreGameDemo from './PreGameDemo';
import GameplayDemo from './play/GameplayDemo';
import LeaderboardDemo from './play/LeaderboardDemo';

const FullDemo = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col gap-8 pb-20">
            {/* Header */}
            <header className="bg-evergreen-deep text-white py-6 px-12 shadow-md">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight">Golf Scorecard App Design</h1>
                    <p className="opacity-80 mt-2">Interactive prototype of core flows</p>
                </div>
            </header>

            {/* Content Scroller */}
            <div className="flex flex-col gap-16">

                {/* Row 1: Manager Mode */}
                <section>
                    <div className="px-12 mb-4 border-l-4 border-birdie-gold ml-12">
                        <h2 className="text-2xl font-bold text-ink-black">Flow 1: Manager Setup</h2>
                        <p className="text-slate-neutral">Course configuration and QR code generation.</p>
                    </div>
                    <ManagerModeScreen />
                </section>

                <hr className="border-gray-200 mx-12" />

                {/* Row 2: Pre-Game Onboarding */}
                <section>
                    <div className="px-12 mb-4 border-l-4 border-signal-blue ml-12">
                        <h2 className="text-2xl font-bold text-ink-black">Flow 2: Pre-Game Onboarding</h2>
                        <p className="text-slate-neutral">Player establishes context from QR code and rosters their group.</p>
                    </div>
                    <PreGameDemo />
                </section>

                <hr className="border-gray-200 mx-12" />

                {/* Row 3: Gameplay */}
                <section>
                    <div className="px-12 mb-4 border-l-4 border-evergreen-deep ml-12">
                        <h2 className="text-2xl font-bold text-ink-black">Flow 3: Gameplay (The Engine)</h2>
                        <p className="text-slate-neutral">Scoring interface, state management, and hole transitions.</p>
                    </div>
                    <GameplayDemo />
                </section>

                <hr className="border-gray-200 mx-12" />

                {/* Row 4: Post-Game */}
                <section>
                    <div className="px-12 mb-4 border-l-4 border-birdie-gold ml-12">
                        <h2 className="text-2xl font-bold text-ink-black">Flow 4: Post-Game (Results & Reset)</h2>
                        <p className="text-slate-neutral">Leaderboard, celebration, and next steps.</p>
                    </div>
                    <LeaderboardDemo />
                </section>

            </div>
        </div>
    );
};

export default FullDemo;
