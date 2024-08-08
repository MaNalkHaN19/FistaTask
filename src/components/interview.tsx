import React from "react";

export default function Interview() {
  return (
    <div className="flex flex-col md:flex-row my-14 space-x-16 md:space-x-20 lg:space-x-24 space-y-8">
      <div className="flex flex-col  mb-4 md:mb-0 lg:w-1/2 md:w-1/2 m-8 space-y-6">
        <p className="text-gray-950 text-3xl mb-2">
          Get more comfortable interviewing
        </p>
        <h3>
          See how Interview Warmup uses machine learning to make it easier to
          practice for interviews and discover ways to improve.
        </h3>
        <button className="bg-white text-blue-700 py-2 hover:bg-gray-200  transition my-6">
          Learn More
        </button>
      </div>
      <div className="w-full sm:px-4 md:px-0 lg:px-24 ">
        <iframe
          src="https://www.youtube.com/embed/KKfAuQrwzTY"
          frameBorder="0"
          width="80%"
          height="300"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md md:w-full lg:w-full"
        ></iframe>
      </div>
    </div>
  );
}
