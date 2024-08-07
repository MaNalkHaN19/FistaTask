import React from "react";
import Image from "next/image";
import Grow from "@/assets/Grow.jpg"; // Update the path to the correct image file location

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-10 py-28">
        <Image
          src={Grow}
          alt={"Grow with Google"}
          width={600}
          height={300}
          className="flex-shrink-0 w-full md:w-auto lg:w-96"
        />
        <div className="text-center space-y-10">
          <h1 className="text-gray-800 text-2xl lg:text-6xl ">
            Grow with Google
          </h1>
          <h2 className="text-gray-500 text-xl lg:text-4xl mt-4 lg:mx-40">
            Discover and learn from training, tools, and resources created by
            Google to help you grow your skills, career, or business.
          </h2>
        </div>
        <div className="flex justify-center ">
          <button className="bg-blue-600 text-white px-6 py-4 rounded-sm hover:bg-blue-800 transition duration-300">
            Visit Growth with Google
          </button>
        </div>
      </div>
    </>
  );
}
