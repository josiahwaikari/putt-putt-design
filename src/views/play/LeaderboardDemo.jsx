import React from 'react';
import IPhoneFrame from '../../components/IPhoneFrame';
import LeaderboardScreen from '../../components/LeaderboardScreen';

const PLAYERS = [
    { id: 1, name: 'Tiger', score: 68 },
    { id: 2, name: 'Rory', score: 70 },
    { id: 3, name: 'Scottie', score: 72 },
    { id: 4, name: 'Jon', score: 74 },
];

// Adjust scores for display (relative to par) if needed, but the component handles raw scores nicely.
// Let's pass objects that look ready for the component.

const LeaderboardDemo = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-12 justify-center items-center xl:items-start p-8 overflow-x-auto">

            {/* State 1: Game Over (Celebration) */}
            <div className="flex flex-col items-center gap-4">
                <h3 className="text-lg font-semibold text-slate-500">State 1: Game Over</h3>
                <p className="text-sm text-center max-w-[300px] text-slate-400 mb-2">
                    Triggered immediately on finish. Confetti fires, sorting animation happens.
                </p>
                <IPhoneFrame>
                    <LeaderboardScreen
                        players={PLAYERS}
                        state="celebration"
                    />
                </IPhoneFrame>
            </div>

            {/* State 2: The Decision */}
            <div className="flex flex-col items-center gap-4">
                <h3 className="text-lg font-semibold text-slate-500">State 2: Next Steps</h3>
                <p className="text-sm text-center max-w-[300px] text-slate-400 mb-2">
                    Confetti fades. Primary "Play Again" and destroy "New Group" actions appear.
                </p>
                <IPhoneFrame>
                    <LeaderboardScreen
                        players={PLAYERS}
                        state="decision"
                    />
                </IPhoneFrame>
            </div>

            {/* State 3: Confirmation Modal */}
            <div className="flex flex-col items-center gap-4">
                <h3 className="text-lg font-semibold text-slate-500">State 3: Safety Guard</h3>
                <p className="text-sm text-center max-w-[300px] text-slate-400 mb-2">
                    Native-style modal prevents accidental data loss during the "beer hand-off".
                </p>
                <IPhoneFrame>
                    <LeaderboardScreen
                        players={PLAYERS}
                        state="modal"
                    />
                </IPhoneFrame>
            </div>

        </div>
    );
};

export default LeaderboardDemo;
