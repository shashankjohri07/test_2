import React from 'react';
import '../styles/LoadingSpinner.css';

export function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading more jobs...</p>
    </div>
  );
}