import React from 'react';
import '../styles/JobCard.css';

export function JobCard({ title, company, location, salary, isRemote }) {
  return (
    <div className="job-card">
      <div className="job-card-content">
        <div className="job-info">
          <div className="company-logo">
            <img
              src="https://www.google.com/favicon.ico"
              alt={company}
            />
          </div>
          <div className="job-details">
            <h3>{title}</h3>
            <div className="job-meta">
              {isRemote && (
                <span className="remote-badge">REMOTE</span>
              )}
              <span>Salary: {salary}</span>
            </div>
            <div className="company-info">
              <span>{company}</span>
              <span className="company-location">{location}</span>
            </div>
          </div>
        </div>
        <button className="bookmark-button">
          <span>🔖</span>
        </button>
      </div>
    </div>
  );
}