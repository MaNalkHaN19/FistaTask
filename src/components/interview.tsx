import React from "react";

export default function Interview() {
  return (
    <div className="flex flex-col md:flex-row my-14 space-x-6">
      <div className="flex flex-col md:mr-4 mb-4 md:mb-0 lg:w-1/2 md:w-1/2 m-8 space-y-6">
        <p className="text-gray-950 text-3xl mb-2">
          Get more comfortable interviewing
        </p>
        <h3>
          See how Interview Warmup uses machine learning to make it easier to
          practice for interviews and discover ways to improve.
        </h3>
        <button className="bg-white text-blue-700 py-2 hover:bg-gray-200 hover:border border-blue-700 transition m-6">
          Learn More
        </button>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.youtube.com/embed/KKfAuQrwzTY"
          frameBorder="0"
          width="100%"
          height="400"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}
