import UserProfile from "./UserProfile";

// const Dashboard = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <UserProfile username="Santosh" age={25} isAdmin={true} />
//       <UserProfile username="Rahul" age={22} isAdmin={false} />
//       <UserProfile username="Priya" age={28} />
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { Lightbulb, Plus, Minus, RotateCcw, Power } from 'lucide-react';

const Dashboard = () => {
    // 1. State for the Light Switch (Boolean)
    const [isLightOn, setIsLightOn] = useState(false);

    // 2. State for the Counter (Number)
    const [count, setCount] = useState(0);

    // Counter Logic with "Below Zero" Protection
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
    const reset = () => setCount(0);

    return (

        <>
          <div className="p-1 bg-gray-100 min-h-screen">
      <UserProfile username="Santosh" age={25} isAdmin={true} />
       <UserProfile username="Rahul" age={22} isAdmin={false} />
       <UserProfile username="Priya" age={28} />
    </div>

        <div className={`min-h-screen transition-colors duration-500 p-8 flex flex-col items-center justify-center ${isLightOn ? 'bg-amber-50' : 'bg-slate-950'}`}>
       
       
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">

                {/* --- LIGHT SWITCH SECTION --- */}
                <div className={`p-8 rounded-3xl border-2 transition-all duration-500 flex flex-col items-center justify-center space-y-6 ${isLightOn ? 'bg-white border-amber-200 shadow-xl shadow-amber-200/50' : 'bg-slate-900 border-slate-800 shadow-2xl'}`}>
                    <div className={`p-6 rounded-full transition-all duration-500 ${isLightOn ? 'bg-amber-100 text-amber-600 animate-pulse' : 'bg-slate-800 text-slate-600'}`}>
                        <Lightbulb size={48} strokeWidth={isLightOn ? 2.5 : 1.5} />
                    </div>

                    <div className="text-center">
                        <h2 className={`text-2xl font-black mb-2 ${isLightOn ? 'text-slate-800' : 'text-white'}`}>
                            The Switch is {isLightOn ? 'ON' : 'OFF'}
                        </h2>
                        <p className={`text-sm ${isLightOn ? 'text-slate-500' : 'text-slate-400'}`}>
                            Changing this state re-renders the background.
                        </p>
                    </div>

                    <button
                        onClick={() => setIsLightOn(!isLightOn)}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all active:scale-95 ${isLightOn ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-amber-500 text-white hover:bg-amber-400 shadow-lg shadow-amber-500/20'}`}
                    >
                        <Power size={18} />
                        Flip Switch
                    </button>
                </div>

                {/* --- COUNTER SECTION --- */}
                <div className={`p-8 rounded-3xl border-2 transition-all duration-500 flex flex-col items-center justify-center ${isLightOn ? 'bg-white border-slate-200 shadow-xl' : 'bg-slate-900 border-slate-800 shadow-2xl'}`}>
                    <div className="text-center mb-8">
                        <h2 className={`text-2xl font-black mb-1 ${isLightOn ? 'text-slate-800' : 'text-white'}`}>Smart Counter</h2>
                        <p className={`text-sm ${isLightOn ? 'text-slate-500' : 'text-slate-400'}`}>Protected from negative values</p>
                    </div>

                    <div className={`text-7xl font-black mb-10 tabular-nums ${isLightOn ? 'text-slate-900' : 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]'}`}>
                        {count}
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={decrement}
                            disabled={count === 0}
                            className="p-4 rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20 hover:bg-rose-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <Minus size={24} />
                        </button>

                        <button
                            onClick={reset}
                            className={`p-4 rounded-2xl transition-all ${isLightOn ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                        >
                            <RotateCcw size={24} />
                        </button>

                        <button
                            onClick={increment}
                            className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all"
                        >
                            <Plus size={24} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default Dashboard;