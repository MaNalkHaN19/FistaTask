import React from "react";

export default function FilmVideo() {
  return (
    <div className="my-12 mx-5 border border-blue-300 bg-blue-300 rounded-xl p-6 py-14">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col items-center justify-center md:mr-4 mb-4 md:mb-0 lg:w-1/2 md:w-1/2 m-4">
          <p className="text-gray-950 text-3xl mb-2 text-center">
            Helpful technology enables everyone to pursue their goals
          </p>
          <button className="bg-white text-blue-700 px-4 py-2 hover:bg-gray-200 hover:border border-blue-700 transition m-6">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.youtube.com/embed/5amGvnxGO54"
            frameBorder="0"
            width="100%"
            height="400"  // Adjust height to match your design
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
