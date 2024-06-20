import React from 'react';

const jobs = [
  { id: 1, title: 'Front End Developer', link: '/front-dev', description: 'Develop stunning user interfaces' },
  { id: 2, title: 'Quality Assurance Specialist', link: '/QA', description: 'Ensure the highest quality of our products' },
  { id: 3, title: 'Backend Developer', link: '/back-dev', description: 'Build robust server-side applications' },
];

const JobList = () => {
  return (
    <div className="flex items-center justify-center my-36 bg-gray-100">
      <div className="w-full max-w-5xl p-8 rounded-xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Open Roles</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl h-full">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-mctekk-100 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                    {job.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">{job.title}</h2>
                <p className="text-gray-600 text-center mb-4">{job.description}</p>
              </div>
              <div className="text-center mt-auto">
                <a href={job.link} rel="noopener noreferrer" className="inline-block py-2 px-4 bg-mctekk-100 text-white font-bold rounded-full shadow-md hover:bg-black  transition">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
