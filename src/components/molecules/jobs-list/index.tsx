import React from "react";

const jobs = [
  { id: 3, title: 'Backend Developer', link: '/back-dev', description: 'Build robust server-side applications',nojob: false, },
];

const JobList = () => {
  const isSingleJob = jobs.length === 1;

  return (
    <div className="flex items-center justify-center my-36 bg-gray-100">
      <div className="w-full max-w-5xl p-8 rounded-xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Open Roles
        </h1>
        <div
          className={`grid gap-8 ${
            isSingleJob
              ? "grid-cols-1 justify-items-center"
              : "grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
          }`}
        >
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`flex flex-col justify-between p-6 bg-white shadow-lg rounded-xl transform transition-all h-full ${
                job.nojob ? "" : "hover:scale-105 hover:shadow-2xl"
              }`}
            >
              <div>
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`w-16 h-16 ${
                      job.nojob
                        ? "bg-gray-400 text-gray-200"
                        : "bg-mctekk-100 text-white"
                    } flex items-center justify-center rounded-full text-2xl font-bold`}
                  >
                    {/* Ícono o iniciales */}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
                  {job.title}
                </h2>
                <p className="text-gray-600 text-center mb-4">
                  {job.description}
                </p>
              </div>
              <div className="text-center mt-auto">
                <a
                  href={job.nojob ? "#" : job.link}
                  rel="noopener noreferrer"
                  className={`inline-block py-2 px-4 font-bold rounded-full shadow-md transition ${
                    job.nojob
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-mctekk-100 text-white hover:bg-black"
                  }`}
                >
                  {job.nojob ? "Position Closed" : "Apply Now"}
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
