import React from "react";
import Image from "next/image";
import AI from "@/assets/AI.png";
import Update from "@/assets/updates.png";
import Fake from "@/assets/fakecontent.png";

export default function Page() {
  return (
    <>
      <div className="pt-16 py-6">
        <h4 className="text-gray-700 text-sm font-semibold uppercase">
          Latest product news
        </h4>
        <div className="flex flex-col lg:flex-row md:flex-col gap-4 mt-2 ">
          <div className="flex flex-row items-center hover:bg-gray-200 p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full">
            <div className="hidden sm:block lg:block flex-shrink-0">
              <Image src={AI} alt="AI" width={120} height={120} />
            </div>
            <p className="text-black text-xl m-6 lg:line-clamp-2 flex-grow">
              5 design details to check out in new Nest Thermostat and Google TV
              Streamer
            </p>
          </div>
          <div className="flex flex-row items-center hover:bg-gray-200 p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full">
            <div className="hidden sm:block lg:block flex-shrink-0">
              <Image src={Update} alt="Update" width={120} height={120} />
            </div>
            <p className="text-black text-xl m-6 lg:line-clamp-2 flex-grow">
              7 memorable moments in Chromecast's history
            </p>
          </div>
          <div className="flex flex-row items-center hover:bg-gray-200 p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full">
            <div className="hidden sm:block lg:block flex-shrink-0">
              <Image src={Fake} alt="Fake Content" width={120} height={120} />
            </div>
            <p className="text-black text-xl m-6 lg:line-clamp-2 flex-grow">
              Google TV Streamer: Our new entertainment and smart home hub
            </p>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Browse all products
          </button>
        </div>
      </div>
    </>
  );
}
