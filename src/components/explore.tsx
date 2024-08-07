import React from "react";
import Image from "next/image";
import Android from "@/assets/Android.png"; // Update the path to the correct image file location

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-10 py-28">
        <Image
          src={Android}
          alt={"Android Phones"}
          width={600}
          height={300} // Adjust the height if needed
          className="flex-shrink-0 w-auto"
        />
        <div className="text-center space-y-10">
          <h1 className="text-gray-800 text-2xl lg:text-6xl ">
            Bringing the best of Google to Android Devices
          </h1>
          <h2 className="text-gray-500 text-xl lg:text-4xl mt-4 lg:mx-40">
            Android makes it easy to use your favorite apps and services across
            your phone, tablet, watch and more.
          </h2>
        </div>
        <div className="flex justify-center ">
          <button className="bg-blue-600 text-white px-6 py-4 rounded-sm hover:bg-blue-800 transition duration-300">
            Explore the latest
          </button>
        </div>
      </div>
    </>
  );
} 

