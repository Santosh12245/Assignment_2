

import React, { useState } from 'react';

const SecretMessage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showSecret, setShowSecret] = useState(false);

    return (
        <div className="p-8 bg-slate-950 min-h-screen font-sans rounded-xl">
            <div className="max-w-md mx-auto">

                {/* 1. The Heading Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-400 to-slate-500 tracking-tight mb-2">
                        Secret Message
                    </h1>
                    <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">
                        Secure Communication Channel
                    </p>
                    {/* Decorative Glow Line */}
                    <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
                </div>

                {/* 2. Your Existing SecretMessage Card */}
                <div className="relative w-full p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden">

                    {/* Decorative Glow inside the card */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <header className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight text-white">Agent Terminal</h1>
                                <p className="text-slate-500 text-sm">Status: {isLoggedIn ? 'Online' : 'Offline'}</p>
                            </div>

                            {isLoggedIn ? (
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    className="text-xs font-semibold px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                                >
                                    Terminate Session
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsLoggedIn(true)}
                                    className="text-xs font-semibold px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                                >
                                    Re-Authenticate
                                </button>
                            )}
                        </header>

                        <div className="space-y-6">
                            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={showSecret}
                                        onChange={(e) => setShowSecret(e.target.checked)}
                                        className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-slate-900 transition-all cursor-pointer"
                                    />
                                    <span className="text-slate-300 group-hover:text-white transition-colors">
                                        Authorize Data Decryption
                                    </span>
                                </label>
                            </div>

                            {showSecret && (
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 shadow-xl animate-in fade-in zoom-in duration-300">
                                    <h3 className="text-white font-bold mb-1 italic">INTEL UNLOCKED:</h3>
                                    <p className="text-indigo-100 text-sm leading-relaxed">
                                        The shipment arrives at midnight. Use the northern gate.
                                        The passcode is <span className="font-mono bg-black/20 px-1 rounded text-white">XJ-99-ALPHA</span>.
                                    </p>
                                </div>
                            )}

                            {!showSecret && (
                                <div className="h-24 flex items-center justify-center border-2 border-dashed border-slate-800 rounded-2xl">
                                    <p className="text-slate-600 text-sm uppercase tracking-widest font-semibold">Awaiting Authorization...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecretMessage;