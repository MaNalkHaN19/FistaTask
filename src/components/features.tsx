import React from "react";
import Image from "next/image";
import Img1 from "@/assets/group.jpg";
import Img2 from "@/assets/group1.jpg";
import Img3 from "@/assets/communication.jpg";
import person from "@/assets/person.jpg";

export default function Page() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 ">
        <div className="bg-gray-200 rounded-2xl p-6 lg:w-1/2 mx-4">
          <p className="text-gray-950 text-3xl text-center  mb-6">
            Inclusive products and features
          </p>
          <div className="space-y-10">
            <div className="flex flex-row items-center bg-white rounded-2xl cursor-pointer transition-shadow duration-300 w-full hover:shadow-lg hover:border-gray-400 hover:cursor-pointer ">
              <div className="sm:block lg:block flex-shrink-0 ">
                <Image
                  src={Img1}
                  alt="AI"
                  width={80}
                  height={80}
                  className="rounded-2xl w-full"
                />
              </div>
              <p className="text-black text-sm md:text-xl lg:text-xl mx-4 lg:line-clamp-2 flex-grow line-clamp-2">
                Ways to find and support inclusive spaces on Google Maps and
                Search
              </p>
            </div>
            <div className="flex flex-row items-center bg-white rounded-2xl cursor-pointer transition-shadow duration-300 w-full hover:shadow-lg hover:border-gray-400 hover:cursor-pointer my-6">
              <div className="sm:block lg:block flex-shrink-0 ">
                <Image
                  src={Img2}
                  alt="AI"
                  width={80}
                  height={80}
                  className="rounded-2xl w-full"
                />
              </div>
              <p className="text-black text-sm md:text-xl lg:text-xl mx-4 lg:line-clamp-2 flex-grow  line-clamp-2">
                Improved camera technology that accurately photographs diverse
                skin tones.
              </p>
            </div>
            <div className="flex flex-row items-center bg-white rounded-2xl cursor-pointer transition-shadow duration-300 w-full hover:shadow-lg hover:border-gray-400 hover:cursor-pointer ">
              <div className=" lg:block flex-shrink-0 ">
                <Image
                  src={Img3}
                  alt="AI"
                  width={80}
                  height={80}
                  className="rounded-2xl w-full"
                />
              </div>
              <p className="text-black text-sm md:text-xl lg:text-xl mx-4 lg:line-clamp-2 flex-grow line-clamp-2">
                AI-powered tools that help you create more inclusive and diverse
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-sky-200 rounded-2xl p-6 lg:w-1/2 mx-4">
          <p className="text-gray-950 text-2xl leading-relaxed  mb-6">
            “With product inclusion, it is really looking end to end at the
            design and development process and saying: Who else needs to be in
            the room? Who else do we need to have perspective from? And I think
            co-creating is really integral to building a product that actually
            suits the world.”
          </p>
          <div className="pt-14 flex items-center space-x-4">
            <Image
              src={person}
              alt="Product Head"
              width={80}
              height={80}
              className="rounded-xl"
            />
            <div>
              <p className="text-black ">Annie-Jean Baptiste (She/Her)</p>
              <p className="text-black">
                Head of Product Inclusion & Equity, Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
