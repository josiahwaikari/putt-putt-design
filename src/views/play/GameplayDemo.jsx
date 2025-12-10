import React from 'react';
import IPhoneFrame from '../../components/IPhoneFrame';
import ScorecardScreen from './ScorecardScreen';

const GameplayDemo = () => {
    return (
        <div className="w-full bg-neutral-50 p-12 overflow-x-auto">
            <div className="flex flex-col gap-16">

                {/* Row 1: Core Scoring Interactions */}
                <div className="flex gap-12 min-w-max justify-center">
                    <IPhoneFrame title="State 1: Active Hole">
                        <ScorecardScreen state="active" />
                    </IPhoneFrame>

                    <IPhoneFrame title="State 2: Scoring (Feedback)">
                        <ScorecardScreen state="scoring" />
                    </IPhoneFrame>

                    <IPhoneFrame title="State 3: Max Limit Error">
                        <ScorecardScreen state="limit" />
                    </IPhoneFrame>
                </div>

                {/* Row 2: Navigation */}
                <div className="flex gap-12 min-w-max justify-center">
                    <IPhoneFrame title="State 4: Hole Transition">
                        <ScorecardScreen state="transition" />
                    </IPhoneFrame>

                    {/* Placeholders to keep grid alignment if needed, or just leave as one */}
                    <div className="w-[375px] opacity-0 pointer-events-none"></div>
                    <div className="w-[375px] opacity-0 pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default GameplayDemo;
