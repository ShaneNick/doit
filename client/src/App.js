import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleAddTaskClick = () => {
    setShowAddTaskForm(true);
  };

  const addNewTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setShowAddTaskForm(false);
  };

  return (
    <div>
      <Navbar />
      <button onClick={handleAddTaskClick}>Add Task</button>
      {showAddTaskForm && <AddTaskForm onAdd={addNewTask} />}
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
