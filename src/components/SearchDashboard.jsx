// import { useState } from "react";

// const SearchBar = () => {
//   const [text, setText] = useState("");

//   return (
//     <div className="p-6">
//       <input
//         type="text"
//         placeholder="Type here..."
//         onChange={(e) => setText(e.target.value)}
//         className="border p-2 rounded"
//       />

//       <p className="mt-3 font-bold">
//         {text.toUpperCase()}
//       </p>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from 'react';
import { Search, Type, Zap, ArrowRight } from 'lucide-react';

const SearchDashboard = () => {
  const [query, setQuery] = useState('');

  // Handle change function
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 flex items-center justify-center p-6 font-sans rounded-xl">
      <div className="w-full max-w-2xl">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-fuchsia-600/20 blur-[120px] rounded-full -z-10" />

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Event Tracker</span>
            </h1>
            <p className="text-slate-400 text-lg">Experience real-time state synchronization</p>
          </div>

          {/* Search Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Start typing to see the magic..."
                value={query}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-lg"
              />
            </div>

            {/* Results Section */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-2 text-slate-400 font-medium px-1">
                <Type size={18} />
                <span>Live Transformation</span>
              </div>

              {/* Uppercase Display Label */}
              <div className="min-h-[100px] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden">
                {query ? (
                  <p className="text-3xl md:text-5xl font-black text-center break-all tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    {query.toUpperCase()}
                  </p>
                ) : (
                  <p className="text-slate-600 italic">Preview will appear here in uppercase...</p>
                )}
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-2">
                  <Zap size={16} className={query ? "text-amber-400 animate-pulse" : "text-slate-700"} />
                </div>
              </div>

              {/* Status Footer */}
              <div className="flex justify-between items-center px-2 py-4 border-t border-slate-700/50">
                <div className="text-sm">
                  <span className="text-slate-500">Character Count:</span>
                  <span className="ml-2 font-mono text-indigo-400 font-bold">{query.length}</span>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group">
                  Continue Integration <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;