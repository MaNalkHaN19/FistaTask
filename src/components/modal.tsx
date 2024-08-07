import Image from "next/image";
import first from "@/assets/firstImage.jpg";
import second from "@/assets/secondImage.png";
import third from "@/assets/thirdImage.jpg";
import React from "react";

export default function Page() {
  return (
    <article className="flex flex-col space-y-7 md:space-y-0 md:flex-row md:space-x-7">
      <div className="flex flex-row md:flex-col w-full md:w-1/2 lg:w-1/3 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer ">
        <div className="h-16 w-16 md:h-64 md:w-full lg:h-80 flex-shrink-0">
          <Image
            src={first}
            alt="Get Support"
            className="object-cover h-full w-full rounded-s-xl lg:rounded-t-xl md:rounded-t-xl"
          />
        </div>
        <div className="text-center font-sans p-2 flex-1">
          <h2 className="text-sm lg:text-2xl">Get product support</h2>
        </div>
      </div>
      <div className="flex flex-row md:flex-col w-full md:w-1/2 lg:w-1/3 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer">
        <div className="h-16 w-16 md:h-64 md:w-full lg:h-80 flex-shrink-0">
          <Image
            src={second}
            alt="Get Support"
            className="object-cover h-full w-full rounded-s-xl lg:rounded-t-xl md:rounded-t-xl"
          />
        </div>
        <div className="text-center font-sans p-2 flex-1">
          <h2 className="text-sm lg:text-2xl">Get disability support</h2>
        </div>
      </div>
      <div className="flex flex-row md:flex-col w-full md:w-1/2 lg:w-1/3 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer">
        <div className="h-16 w-16 md:h-64 md:w-full lg:h-80 flex-shrink-0">
          <Image
            src={third}
            alt="Get Support"
            className="object-cover h-full w-full rounded-s-xl lg:rounded-t-xl  md:rounded-t-xl"
          />
        </div>
        <div className="text-center font-sans p-2 flex-1">
          <h2 className="text-sm lg:text-2xl">Shop google store</h2>
        </div>
      </div>
    </article>
  );
}
