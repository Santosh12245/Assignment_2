import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dashboard from './components/Dashboard'
// import Counter from './components/Counter'
import LightSwitch from './components/LightSwitch'
import SearchDashboard from './components/SearchDashboard'
import TodoList from './components/TodoList'
// import AutoFocus from './components/AutoFocus'
import SecretMessage from './components/SecretMessage'
import FocusInput from './components/FocusInput'
function App() {
  return (
    <div className="space-y-8 p-6">

      <h1 className="text-3xl font-bold text-center">
        React Practice Dashboard
      </h1>

      <Dashboard />
       {/* <Counter /> */}
      <LightSwitch />
      <SearchDashboard />
      <SecretMessage />
      <TodoList />
      {/* <AutoFocus />  */}
      <FocusInput/>

    </div>
  );

}

export default App
