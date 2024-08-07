import React from "react";
import Image from "next/image";
import Career from "@/assets/career.jpg";
import Job from "@/assets/job.jpg";
import Digital from "@/assets/digital.jpg";

export default function Page() {
  return (
    <div className="py-8">
      <article className="flex flex-col md:justify-center md:flex-row md:flex-wrap lg:flex-nowrap justify-between space-y-7 md:space-y-1 md:space-x-6 lg:space-x-7">
        <div className="flex flex-col w-full md:w-5/12  lg:w-1/3 lg:mb-0 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer">
          <div className="h-80">
            <Image
              src={Career}
              alt="Career"
              className="object-cover h-full w-full rounded-t-xl"
            />
          </div>
          <div className="font-sans p-4 mt-4 text-gray-800 space-y-2">
            <h2 className="text-xl text-gray-900">
              Google Career Certificates
            </h2>
            <h3 className="text-gray-500">
              Discover flexible online training programs designed to fast track
              you to jobs in high-growth fields.
            </h3>
            <button className="text-blue-600 px-2 py-4 font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-5/12 lg:w-1/3 mb-4 lg:mb-0 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer">
          <div className="h-80">
            <Image
              src={Job}
              alt="Tablet"
              className="object-cover h-full w-full rounded-t-xl"
            />
          </div>
          <div className=" font-sans p-4 mt-4 text-gray-800 space-y-2">
            <h2 className="text-xl text-gray-900">Grow your career</h2>
            <h3 className="text-gray-500">
              Learn how to find a new job that is right for you, get more
              comfortable with interviewing, and optimize your resume with our
              Grow with Google experts.
            </h3>
            <button className="text-blue-600 px-2  font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-6/12  lg:w-1/3 mb-4 lg:mb-0 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer ">
          <div className="h-80">
            <Image
              src={Digital}
              alt="Phone"
              className="object-cover h-full w-full rounded-t-xl"
            />
          </div>
          <div className="font-sans p-4 mt-4 text-gray-800 space-y-2">
            <h2 className="text-xl text-gray-900">Applied Digital Skills</h2>
            <h3 className="text-gray-500">
              Explore our video-based curriculums that prepare students of all
              ages for jobs requiring basic digital skills.
            </h3>
            <button className="text-blue-600 px-2 py-4 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
