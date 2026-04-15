// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Dashboard from './components/Dashboard'
// // import Counter from './components/Counter'
// import LightSwitch from './components/LightSwitch'
// import SearchDashboard from './components/SearchDashboard'
// import TodoList from './components/TodoList'
// // import AutoFocus from './components/AutoFocus'
// import SecretMessage from './components/SecretMessage'
// import FocusInput from './components/FocusInput'
// function App() {
//   return (
//     <div className="space-y-8 p-6">

//       <h1 className="text-3xl font-bold text-center">
//         React Practice Dashboard
//       </h1>

//       <Dashboard />
//        {/* <Counter /> */}
//       <LightSwitch />
//       <SearchDashboard />
//       <SecretMessage />
//       <TodoList />
//       {/* <AutoFocus />  */}
//       <FocusInput/>

//     </div>
//   );

// }

// export default App


import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import LightSwitch from './components/LightSwitch'
import SearchDashboard from './components/SearchDashboard'
import TodoList from './components/TodoList'
import SecretMessage from './components/SecretMessage'
import FocusInput from './components/FocusInput'

function App() {
  return (
    /* 1. Main Background Wrapper with Deep Slate & Radial Glow */
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      
      {/* 2. Decorative Background Elements (Orbs) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 p-6 md:p-12 space-y-20">
        
        {/* 3. High-End Glassmorphism Header */}
        <header className="max-w-4xl mx-auto text-center space-y-4 py-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
              Development Environment v2.0
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            React <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Mastery</span> Hub
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-400 text-lg font-medium leading-relaxed">
            A comprehensive suite of interactive components and state management patterns.
          </p>
          
          <div className="flex justify-center gap-2 pt-4">
             <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-transparent" />
             <div className="h-1 w-4 rounded-full bg-slate-800" />
             <div className="h-1 w-1 rounded-full bg-slate-800" />
          </div>
        </header>

        {/* 4. Component Grid/Stack */}
        <main className="max-w-7xl mx-auto space-y-32 pb-20">
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
             <Dashboard />
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
             <LightSwitch />
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
             <SearchDashboard />
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
             <SecretMessage />
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
             <TodoList />
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
             <FocusInput />
          </section>
        </main>

        {/* 5. Footer */}
        <footer className="text-center py-10 border-t border-slate-900">
          <p className="text-slate-600 text-sm font-mono tracking-widest uppercase">
            &copy; 2026 Santosh // Build Protocol Alpha
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;