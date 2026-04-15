
import React, { useRef, useEffect } from 'react';
import { User, ShieldCheck, Zap } from 'lucide-react';

const FocusInput = () => {
    // 1. Initialize the ref
    const firstNameRef = useRef(null);

    // 2. Focus on Mount (The Exercise)
    useEffect(() => {
        if (firstNameRef.current) {
            firstNameRef.current.focus();
        }
    }, []);

    // 3. Manual Focus Handler
    const handleManualFocus = () => {
        firstNameRef.current.focus();
    };

    return (
        <div className="min-h-screen bg-[#050505] text-slate-300 font-sans p-6 flex flex-col items-center justify-center rounded-xl">
            {/* Background Glows */}
            <div className="fixed top-0 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
            <div className="fixed bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
            {/* 1. NEW HEADING SECTION */}
            <div className="text-center mb-10 relative z-10">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    SYSTEM ACCESS
                </h1>
                <div className="flex items-center justify-center gap-3 mt-2">
                    <div className="h-[1px] w-8 bg-slate-800"></div>
                    <p className="text-slate-500 uppercase text-[10px] tracking-[0.3em] font-bold">
                        Input Reference Terminal
                    </p>
                    <div className="h-[1px] w-8 bg-slate-800"></div>
                </div>
            </div>
            <div className="relative w-full max-w-2xl bg-[#0f0f12] border border-slate-800/60 rounded-[2rem] shadow-2xl overflow-hidden">

                {/* Header Ribbon */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full"></div>

                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                                Set up Profile <Zap className="text-yellow-400 fill-yellow-400" size={24} />
                            </h2>
                            <p className="text-slate-500 mt-1">Complete your identity to access the global market.</p>
                        </div>
                        <button
                            onClick={handleManualFocus}
                            className="text-xs font-medium uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors py-2 px-4 bg-indigo-500/5 rounded-lg border border-indigo-500/10"
                        >
                            Re-focus Input
                        </button>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Input with auto-focus Ref */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400 ml-1">Display Name</label>
                            <div className="relative">
                                <input
                                    ref={firstNameRef} // 4. Attach the ref
                                    type="text"
                                    placeholder="e.g. Santosh"
                                    className="w-full bg-[#16161a] border border-slate-800 rounded-xl py-3 px-11 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                />
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400 ml-1">Account Role</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Software Developer"
                                    className="w-full bg-[#16161a] border border-slate-800 rounded-xl py-3 px-11 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                                />
                                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                            </div>
                        </div>

                        <div className="md:col-span-2 space-y-2">
                            <label className="text-sm font-semibold text-slate-400 ml-1">Bio / Skills</label>
                            <textarea
                                rows="3"
                                placeholder="Tell us about your trading goals..."
                                className="w-full bg-[#16161a] border border-slate-800 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="md:col-span-2 w-full mt-4 bg-white text-black font-bold py-4 rounded-xl hover:bg-slate-200 transition-all active:scale-[0.98] shadow-lg shadow-white/5"
                        >
                            Initialize Dashboard
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FocusInput;