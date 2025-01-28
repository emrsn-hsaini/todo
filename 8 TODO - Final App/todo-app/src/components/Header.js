import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Importing Header CSS

const Header = ({ user, onLogout }) => {
  return (
    <header className="App-header">
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/tasks">Tasks</Link>
            <span>Hi {user.username}!</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;