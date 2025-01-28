import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import '../styles/Tasks.css';

const Tasks = ({ user, showNotification }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks', {
          headers: { Authorization: user.token },
        });
        setTasks(response.data);
      } catch (error) {
        showNotification('Failed to fetch tasks', 'error');
      }
    };

    fetchTasks();
  }, [user.token, showNotification]);

  const handleAddTask = async (title) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/tasks',
        { title },
        { headers: { Authorization: user.token } }
      );
      setTasks([response.data, ...tasks]);
      showNotification('Task added successfully', 'success');
    } catch (error) {
      showNotification('Failed to add task', 'error');
    }
  };

  const handleMarkAsCompleted = async (taskId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${taskId}`,
        {},
        { headers: { Authorization: user.token } }
      );
      setTasks(tasks.map((task) => (task._id === taskId ? response.data : task)));
      showNotification('Task marked as completed', 'success');
    } catch (error) {
      showNotification('Failed to mark task as completed', 'error');
    }
  };

  return (
    <div className="main-content">
      <h2>Tasks</h2>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onMarkAsCompleted={handleMarkAsCompleted} />
    </div>
  );
};

export default Tasks;