import React from 'react';
import '../styles/SearchBar.css';

export function SearchBar() {
  return (
    <div className="container search-container">
      <div className="search-form">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by Job title, Position, Keyword..."
            className="search-input"
          />
        </div>
        <div className="search-input-wrapper">
          <span className="search-icon">📍</span>
          <input
            type="text"
            placeholder="City, state or country"
            className="search-input"
          />
        </div>
        <button className="filter-button">
          <span>⚙️</span>
        </button>
        <button className="search-button">
          Find Job
        </button>
      </div>
    </div>
  );
}