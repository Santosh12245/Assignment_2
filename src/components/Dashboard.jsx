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

    return (

        <>
            <div className="p-8 bg-slate-950 min-h-screen rounded-xl">
                <div className="max-w-7xl mx-auto">

                    {/* Centered Heading Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-slate-500 tracking-tight mb-2">
                            User Profiles
                        </h1>
                        <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">
                            Management Dashboard
                        </p>
                        {/* Decorative underline */}
                        <div className="mt-4 h-1 w-16 bg-cyan-500 mx-auto rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                    </div>

                    {/* Grid container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <UserProfile username="Santosh" age={24} isAdmin={true} />
                        <UserProfile username="Rahul" age={22} isAdmin={false} />
                        <UserProfile username="Prasad" age={28} />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;