import React from 'react';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onMarkAsCompleted }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onMarkAsCompleted(task._id)}
          />
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;