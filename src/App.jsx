import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage.js';
import TaskForm from './components/TaskForm.jsx';
import TaskFilter from './components/TaskFilter.jsx';
import TaskStats from './components/TaskStats.jsx';
import TaskList from './components/TaskList.jsx';

function App() {
  const [tasks, setTasks] = useLocalStorage('todo-tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const totalCount = tasks.length;
  const activeCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="page">
      <main className="app">
        <h1 className="app__title">Планировщик задач</h1>

        <TaskForm onAdd={addTask} />

        <TaskFilter currentFilter={filter} onChange={setFilter} />

        <TaskList
          tasks={visibleTasks}
          filter={filter}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <TaskStats total={totalCount} active={activeCount} />
      </main>
    </div>
  );
}

export default App;
