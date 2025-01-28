import React, { useState } from 'react';
import '../styles/AddTaskForm.css';

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;