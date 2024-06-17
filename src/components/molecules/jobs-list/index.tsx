import React from 'react';

const jobs = [
  { id: 1, title: 'Front End Developer', link: '/front-dev' },
  { id: 2, title: 'Quality Assurance Specialist', link: '/QA' },
  { id: 3, title: 'Backend Developer', link: '/back-dev' },
];

const JobList = () => {
  return (
    <div className="flex items-center justify-center my-36 bg-gray-100">
      <div className="w-full max-w-lg p-4 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Jobs</h1>
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="p-4 bg-gray-200 shadow rounded-lg hover:bg-gray-300 transition">
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-800 font-semibold text-[20px]">
                {job.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobList;
