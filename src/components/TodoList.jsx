// const TodoList = () => {
//   const tasks = [
//     { id: 1, task: "Learn React" },
//     { id: 2, task: "Build App" },
//     { id: 3, task: "Practice Coding" },
//     { id: 4, task: "Read Docs" },
//   ];

//   return (
//     <ul className="p-6">
//       {tasks.map((item) => (
//         <li
//           key={item.id}
//           className="flex justify-between bg-gray-100 p-2 mb-2"
//         >
//           {item.task}
//           <button className="bg-red-500 text-white px-2">
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;


import React from 'react';
import { Trash2, CheckCircle2, ListTodo } from 'lucide-react'; // Assuming Lucide for icons

const TodoList = () => {
  const initialTasks = [
    { id: 't1', title: 'Refactor Auth Middleware', priority: 'High' },
    { id: 't2', title: 'Review PR #442', priority: 'Medium' },
    { id: 't3', title: 'Update Tailwind Config', priority: 'Low' },
    { id: 't4', title: 'Implement List Mapping', priority: 'High' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 p-4 md:p-10 text-neutral-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
              <ListTodo className="text-indigo-400 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Sprint Backlog</h1>
              <p className="text-neutral-500 text-sm">Active Development Cycle</p>
            </div>
          </div>
          <div className="hidden md:block px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs font-mono text-neutral-400">
            Tasks Count: {initialTasks.length}
          </div>
        </header>

        {/* Task List Container */}
        <div className="bg-neutral-900/40 border border-neutral-800/50 rounded-3xl overflow-hidden backdrop-blur-sm">
          <ul className="divide-y divide-neutral-800/50">
            {initialTasks.map((task) => (
              <li 
                key={task.id} 
                className="group flex items-center justify-between p-5 hover:bg-neutral-800/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <button className="text-neutral-600 hover:text-indigo-400 transition-colors">
                    <CheckCircle2 size={20} />
                  </button>
                  <div>
                    <p className="text-neutral-200 font-medium group-hover:text-white transition-colors">
                      {task.title}
                    </p>
                    <span className={`text-[10px] uppercase tracking-widest font-bold ${
                      task.priority === 'High' ? 'text-rose-500' : 
                      task.priority === 'Medium' ? 'text-amber-500' : 'text-emerald-500'
                    }`}>
                      {task.priority} Priority
                    </span>
                  </div>
                </div>

                <button 
                  className="p-2 opacity-0 group-hover:opacity-100 bg-neutral-800 text-neutral-400 hover:bg-rose-500/10 hover:text-rose-500 rounded-lg transition-all duration-200"
                  aria-label="Delete task"
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>

          {/* Footer/Quick Action */}
          <div className="p-4 bg-neutral-900/60 border-t border-neutral-800/50">
            <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/10 active:scale-[0.98]">
              + Create New Task
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TodoList;