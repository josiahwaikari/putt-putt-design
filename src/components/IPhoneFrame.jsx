import React from 'react';

const IPhoneFrame = ({ children, title }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            {title && <h3 className="text-sm font-semibold text-slate-neutral uppercase tracking-wider">{title}</h3>}

            {/* Device Frame */}
            <div className="relative w-[375px] h-[812px] bg-black rounded-[50px] p-3 shadow-2xl border-4 border-gray-900 ring-1 ring-gray-950 overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">

                {/* Screen Content */}
                <div className="relative w-full h-full bg-sage-mist rounded-[40px] overflow-hidden flex flex-col">

                    {/* Status Bar Area (Simulated) */}
                    <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20">
                        <span className="text-xs font-semibold text-ink-black">9:41</span>
                        <div className="flex gap-1.5 item-center">
                            <div className="w-4 h-2.5 bg-ink-black rounded-[1px] opacity-20"></div>
                            <div className="w-4 h-2.5 bg-ink-black rounded-[1px] opacity-20"></div>
                            <div className="w-6 h-2.5 border border-ink-black/30 rounded-[2px] relative">
                                <div className="absolute inset-0.5 bg-ink-black rounded-[1px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 pointer-events-none"></div>

                    {/* Main Content Area */}
                    <div className="flex-1 w-full h-full relative no-scrollbar">
                        {children}
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-ink-black/20 rounded-full z-20"></div>
                </div>
            </div>
        </div>
    );
};

export default IPhoneFrame;
