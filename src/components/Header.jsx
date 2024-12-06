import React from 'react';
import '../styles/Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <div className="logo-icon">📋</div>
          <h1 className="logo-text">Explorin Solutions</h1>
        </div>
        <div className="header-actions">
          <div className="saved-jobs-toggle">
            <input type="checkbox" id="savedJobs" />
            <label htmlFor="savedJobs">My Saved Jobs only</label>
          </div>
          <div className="user-avatar">👤</div>
        </div>
      </div>
    </header>
  );
}
