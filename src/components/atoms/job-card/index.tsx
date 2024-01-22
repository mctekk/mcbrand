import React from "react";

type Props = {};

export default function JobCard({}: Props) {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center py-32">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Apply for a Job at MCTEKK
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          MCTEKK (Remote)
        </p>
        <p className="mt-6 text-base leading-7 text-gray-600">Developers</p>
        <p className="mt-6 font-semibold leading-7 text-gray-600">Job Description</p>
        <p className="mt-6  leading-7 text-gray-600">Please send in your CV and cover Letter if you're interested in working for us. Click Apply Now.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/jobs-form"
            className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Apply Now
          </a>
        </div>
      </div>
    </main>
  );
}
