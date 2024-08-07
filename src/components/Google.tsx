import Image from "next/image";
import React from "react";
import google from "@/assets/icons/chrome.png";
import map from "@/assets/icons/google-maps.png";
import photos from "@/assets/icons/google-photos.png";
import airpods from "@/assets/icons/airpods.png";
import powerbank from "@/assets/icons/iphone.png";

const logos = [google, map, airpods, powerbank, photos];

const ResponsiveDesign: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center my-24">
      <div className="flex items-center space-x-2 mb-4">
        <h1 className="flex items-center text-4xl lg:text-9xl font-sans md:text-8xl">
          Go
          <div className="flex items-center space-x-2 mx-2">
            {logos.map((src, index) => (
              <div key={index} className="relative w-6 h-6 md:w-14 md:h-14">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
          ogle
        </h1>
      </div>
      <h2 className="flex items-center text-4xl lg:text-9xl font-sans md:text-8xl">
        products
      </h2>
    </div>
  );
};

export default ResponsiveDesign;
