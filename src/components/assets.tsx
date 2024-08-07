import React from "react";
import Image from "next/image";
import Phone from "@/assets/phone.jpg";
import Tablet from "@/assets/tablet.jpg";
import Watch from "@/assets/watch.jpg";
import Car from "@/assets/car.jpg";

export default function Page() {
  return (
    <div className="py-8">
      <article className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap justify-between space-y-7 md:space-y-1 md:space-x-6 lg:space-x-7">
        <div className="flex flex-col w-full md:w-5/12 lg:w-1/4  lg:mb-0 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer ">
          <div className="h-80">
            <Image
              src={Phone}
              alt="Phone"
              className="object-cover h-full w-full rounded-t-xl"
            />
          </div>
          <div className="text-center font-sans p-4 mt-4 text-gray-800 space-y-2">
            <h2 className="text-sm lg:text-xl hover:text-gray-900">Phones</h2>
            <h3 className="text-gray-500">
              Use your Android phone to unlock your Chromebook, control your TV,
              and adjust your smart home devices.
            </h3>
            <button className="text-blue-600 px-6 py-4 font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-5/12 lg:w-1/4 mb-4 lg:mb-0 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer">
          <div className="h-80">
            <Image
              src={Tablet}
              alt="Tablet"
              className="object-cover h-full w-full rounded-t-xl"
            />
          </div>
          <div className="text-center font-sans p-4 mt-4 text-gray-800 space-y-2">
            <h2 className="text-sm lg:text-xl hover:text-gray-900">Tablets</h2>
            <h3 className="text-gray-500">
              Enjoy your favorite apps on a bigger screen, reply to texts, and
              share files seamlessly between your Android devices.
            </h3>
            <button className="text-blue-600 px-6 py-4 font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-5/12 lg:w-1/4 mb-4 lg:mb-0 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer">
          <div className="h-80">
            <Image
              src={Watch}
              alt="Watch"
              className="object-cover h-full w-full rounded-t-xl"
            />
          </div>
          <div className="text-center font-sans p-4 mt-4 text-gray-800 space-y-2">
            <h2 className="text-sm lg:text-xl hover:text-gray-900">Watches</h2>
            <h3 className="text-gray-500">
              Access Google apps right from your wrist with Wear OS. Play music,
              track steps, and keep up with calls and texts.
            </h3>
            <button className="text-blue-600 px-6 py-4 font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-5/12 lg:w-1/4 mb-4 lg:mb-0 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-400 hover:cursor-pointer">
          <div className="h-80">
            <Image
              src={Car}
              alt="Car"
              className="object-cover h-full w-full rounded-t-xl"
            />
          </div>
          <div className="text-center font-sans p-4 mt-4 text-gray-800 space-y-2">
            <h2 className="text-sm lg:text-xl hover:text-gray-900">Cars</h2>
            <h3 className="text-gray-500">
              Connect your phone to your car display to find routes, communicate
              with friends, check the weather, and more.
            </h3>
            <button className="text-blue-600 px-6 py-4 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
