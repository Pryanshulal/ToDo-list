import React from 'react';
import './App.css';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.find(task => task.text === taskText)) {
      alert('Task cannot be empty or duplicate!');
      return;
    }
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoForm addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button className="remove-btn" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
