// pages/index.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import android from "@/assets/icons/airpods.png"; // Update paths to your icons
import chrome from "@/assets/icons/chrome.png";
import maps from "@/assets/icons/google-maps.png";
import photos from "@/assets/icons/google-photos.png";
import airpods from "@/assets/icons/airpods.png";
// Add all necessary imports

const products = [
  { name: "Android", icon: android },
  { name: "Chrome", icon: chrome },
  { name: "Google Maps", icon: maps },
  { name: "Google Photos", icon: photos },
  { name: "Airpods", icon: airpods },
  // Add all products here
];

const categories = [
  { name: "For all", products },
  { name: "For business", products },
  { name: "For developers", products },
];

const HomePage = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(
      expandedCategory === categoryName ? null : categoryName
    );
  };

  return (
    <div className="container mx-auto p-4">
      <hr></hr>
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full p-4 "
            onClick={() => toggleCategory(category.name)}
          >
            <span className="text-base ">{category.name}</span>
            <span className="text-base">
              {expandedCategory === category.name ? "▲" : "▼"}
            </span>
          </button>
          <hr></hr>
          {expandedCategory === category.name && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
              {category.products.map((product, index) => (
                <div key={index} className="flex flex-row items-center hover:cursor-pointer">
                  <div className="w-6 h-6 md:w-20  relative mb-2">
                    <Image
                      src={product.icon}
                      alt={product.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-center">{product.name}</span>
                  <hr></hr>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
