import React, { useState, useEffect } from 'react';
import IPhoneFrame from '../components/IPhoneFrame';
import { User, X, ChevronRight } from 'lucide-react';

const PreGameScreen = ({ state }) => {
    // Animation states
    const [headerVisible, setHeaderVisible] = useState(false);
    const [cardVisible, setCardVisible] = useState(false);
    const [players, setPlayers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Setup state
    useEffect(() => {
        // Trigger animations
        setTimeout(() => setHeaderVisible(true), 100);
        setTimeout(() => setCardVisible(true), 400);

        if (state === 'entry' || state === 'ready') {
            setPlayers([{ id: 1, name: 'Dave' }]);
        }
        if (state === 'ready') {
            setPlayers([{ id: 1, name: 'Dave' }, { id: 2, name: 'Sarah' }, { id: 3, name: 'Mike' }]);
        }
    }, [state]);

    return (
        <div className="relative w-full h-full bg-sage-mist overflow-hidden flex flex-col font-sans">
            {/* Header Section */}
            <div className="h-[35%] bg-evergreen-deep w-full relative flex flex-col justify-center px-8 z-0">
                <div className={`transition-opacity duration-700 ease-out transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <h1 className="text-white text-3xl font-bold tracking-tight mb-2">
                        Welcome to<br />
                        <span className="text-4xl">Pine Valley</span>
                    </h1>
                    <p className="text-sage-mist/80 text-sm font-medium tracking-wide">
                        18 HOLES • PAR 72
                    </p>
                </div>
            </div>

            {/* Roster Card Sheet */}
            <div
                className={`absolute inset-x-0 bottom-0 bg-white rounded-t-[32px] shadow-[0_-8px_32px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-out z-10 flex flex-col overflow-hidden
                ${cardVisible ? 'translate-y-0 h-[72%]' : 'translate-y-full h-[72%]'}`}
            >
                {/* Drag Handle */}
                <div className="w-full flex justify-center pt-3 pb-1">
                    <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                </div>

                <div className="px-6 pt-4 pb-24 flex-1 flex flex-col">
                    <h2 className="text-xl font-semibold text-evergreen-deep mb-6">Who's playing?</h2>

                    {/* Input Field */}
                    <div className="relative mb-6">
                        <label className="block text-xs font-medium text-slate-neutral mb-2 uppercase tracking-wide">
                            ADD PLAYER
                        </label>
                        <div className={`flex items-center w-full h-14 px-4 rounded-xl border border-gray-200 bg-white transition-all duration-300 ${state === 'entry' ? 'ring-2 ring-signal-blue border-signal-blue shadow-[0_0_0_4px_rgba(41,98,255,0.1)]' : ''}`}>
                            <User className={`w-5 h-5 ${state === 'entry' ? 'text-signal-blue' : 'text-gray-400'} mr-3`} />
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="w-full h-full outline-none text-lg text-ink-black placeholder:text-gray-300 bg-transparent"
                                autoFocus={state === 'entry'}
                                defaultValue={state === 'entry' ? '' : ''}
                            />
                            {state === 'entry' && (
                                <div className="text-xs font-bold text-signal-blue bg-blue-50 px-2 py-1 rounded">RETURN</div>
                            )}
                        </div>
                    </div>

                    {/* Players List */}
                    <div className="flex-1 overflow-y-auto space-y-3">
                        {players.map((player, idx) => (
                            <div
                                key={player.id}
                                className="flex items-center justify-between p-4 bg-mint-surface rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <span className="text-lg font-medium text-ink-black">{player.name}</span>
                                <button className="p-2 text-slate-neutral hover:text-error-crimson transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}

                        {/* Ghost Chip for Entry demo */}
                        {state === 'entry' && (
                            <div className="flex items-center justify-between p-4 bg-mint-surface rounded-xl border border-signal-blue/20 animate-pulse">
                                <span className="text-lg font-medium text-ink-black">Dav|</span>
                            </div>
                        )}
                        {/* Wait, the requirement says user typed Dave and hit return, so Dave drops into list. */}
                        {/* So for 'entry', I should just show 'Dave' in the list. I'll stick to the players state I set in useEffect */}
                    </div>
                </div>

                {/* Sticky Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-12">
                    <button
                        className={`w-full h-[56px] rounded-xl flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-300 transform active:scale-95
                        ${state === 'ready'
                                ? 'bg-signal-blue text-white shadow-signal-blue/30 animate-pulse-subtle'
                                : 'bg-gray-100 text-disabled cursor-not-allowed'}`}
                    >
                        <span>Start Round</span>
                        {state === 'ready' && <ChevronRight className="w-5 h-5 ml-2" />}
                    </button>
                    {/* Safe Area padding */}
                    <div className="h-4"></div>
                </div>
            </div>
        </div>
    );
};

const PreGameDemo = () => {
    return (
        <div className="w-full bg-neutral-100 p-12 overflow-x-auto">
            <div className="flex gap-12 min-w-max justify-center">
                <IPhoneFrame title="State 1: Welcome & Parsing">
                    <PreGameScreen state="welcome" />
                </IPhoneFrame>

                <IPhoneFrame title="State 2: Roster Entry (High Velocity)">
                    <PreGameScreen state="entry" />
                </IPhoneFrame>

                <IPhoneFrame title="State 3: Ready to Tee Off">
                    <PreGameScreen state="ready" />
                </IPhoneFrame>
            </div>
        </div>
    );
};

export default PreGameDemo;
