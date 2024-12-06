import React, { useState, useCallback, useEffect } from 'react';
import { JobCard } from './JobCard';
import { LoadingSpinner } from './LoadingSpinner';
import '../styles/JobList.css';

export function JobList() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [allJobsLoaded, setAllJobsLoaded] = useState(false);

  const JOB_LIMIT = 89; // Total jobs limit
  const JOBS_PER_PAGE = 12; // Number of jobs loaded per page

  // Job generator function
  const generateJobs = (startId, count) => {
    const jobs = [];
    const companies = ['Google Inc.', 'Microsoft', 'Apple', 'Meta', 'Amazon', 'Netflix'];
    const titles = ['Software Engineer', 'Product Manager', 'UX Designer', 'Data Scientist', 'DevOps Engineer'];
    const locations = ['New York, USA', 'London, UK', 'Berlin, Germany', 'Tokyo, Japan', 'Singapore'];

    for (let i = 0; i < count; i++) {
      jobs.push({
        id: startId + i,
        title: titles[Math.floor(Math.random() * titles.length)],
        company: companies[Math.floor(Math.random() * companies.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        salary: `$${Math.floor(Math.random() * 80 + 40)},000 - $${Math.floor(Math.random() * 80 + 80)},000`,
        isRemote: Math.random() > 0.5,
      });
    }
    return jobs;
  };

  // Load more jobs function
  const loadMoreJobs = useCallback(async () => {
    if (isLoading || allJobsLoaded) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

    const remainingJobs = JOB_LIMIT - jobs.length;
    if (remainingJobs <= 0) {
      setAllJobsLoaded(true);
      setIsLoading(false);
      return;
    }

    const newJobs = generateJobs(jobs.length + 1, Math.min(remainingJobs, JOBS_PER_PAGE));
    setJobs(prevJobs => [...prevJobs, ...newJobs]);
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);

    if (jobs.length + newJobs.length >= JOB_LIMIT) {
      setAllJobsLoaded(true);
    }
  }, [jobs.length, isLoading, allJobsLoaded]);

  // Initial load
  useEffect(() => {
    setJobs(generateJobs(1, JOBS_PER_PAGE));
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1;

      if (bottomReached) {
        loadMoreJobs();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreJobs]);

  return (
    <div className="container job-list-container">
      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
      {isLoading && <p className="loading-message">Loading more jobs...</p>}
      {!isLoading && allJobsLoaded && <p className="no-more-jobs">No more jobs available.</p>}
      <footer className="footer">
        <p>© 2024 Explorin. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon youtube">YouTube</a>
          <a href="#" className="icon instagram">Instagram</a>
          <a href="#" className="icon twitter">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
