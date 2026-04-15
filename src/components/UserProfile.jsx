// const UserProfile = ({ username, age, isAdmin = false }) => {
//   return (
//     <div className="p-4 bg-white shadow rounded mb-3">
//       <h2 className="font-bold text-lg">{username}</h2>
//       <p>Age: {age}</p>
//       <p className={isAdmin ? "text-green-600" : "text-gray-500"}>
//         {isAdmin ? "Admin User" : "Normal User"}
//       </p>
//     </div>
//   );
// };

// export default UserProfile;

import React from 'react';
import { User, ShieldCheck, Calendar, Settings } from 'lucide-react'; 

/**
 * UserProfile Component
 * @param {string} username - Display name
 * @param {number} age - User age
 * @param {boolean} isAdmin - Defaulted to false via destructuring
 */
const UserProfile = ({ username, age, isAdmin = false }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 rounded-xl">
      {/* Dashboard Card */}
      <div className="relative w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden transition-all hover:shadow-cyan-500/10">
        
        {/* Top Accent Bar */}
        <div className={`h-2 w-full ${isAdmin ? 'bg-cyan-500' : 'bg-slate-600'}`} />

        <div className="p-8">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div className="h-16 w-16 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600">
              <User className="text-slate-300" size={32} />
            </div>
            {isAdmin && (
              <span className="flex items-center gap-1 px-3 py-1 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full">
                <ShieldCheck size={14} />
                Admin Access
              </span>
            )}
          </div>

          {/* User Details */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {username}
              </h1>
              <p className="text-slate-400 text-sm">System User Profile</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                <div className="text-slate-500 text-xs mb-1 flex items-center gap-1">
                  <Calendar size={12} /> Age
                </div>
                <div className="text-white font-semibold text-lg">{age}</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                <div className="text-slate-500 text-xs mb-1 flex items-center gap-1">
                  <Settings size={12} /> Role
                </div>
                <div className="text-white font-semibold text-lg">
                  {isAdmin ? 'Privileged' : 'Standard'}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-cyan-900/20">
              Edit Profile
            </button>
            {isAdmin && (
              <button className="w-full py-3 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 font-medium rounded-xl transition-all">
                Admin Console
              </button>
            )}
          </div>
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full" />
      </div>
    </div>
  );
};

export default UserProfile;