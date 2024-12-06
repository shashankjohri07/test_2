import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { JobList } from './components/JobList';
import "./styles/global.css"; // Include global CSS
import './styles/global.css';


function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <JobList />
    </div>
  );
}

export default App;