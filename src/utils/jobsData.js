// Mock data generator
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
  
  export { generateJobs };