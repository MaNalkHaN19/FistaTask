"use client";
import { useState } from "react";
import Image from "next/image";
import chrome from "@/assets/icons/chrome.png";
import maps from "@/assets/icons/google-maps.png";
import photos from "@/assets/icons/google-photos.png";
import TV from "@/assets/icons/AndTv.png";
import Auto from "@/assets/icons/AndroidAuto.png";
import android from "@/assets/icons/AndroidIcon.png";
import calender from "@/assets/icons/Calender.png";
import ChromeEnterprise from "@/assets/icons/ChromeInter.png";
import DigitalWellbeing from "@/assets/icons/Digitalwell.png";
import Documents from "@/assets/icons/Docs.png";
import Drive from "@/assets/icons/Drive.png";
import Earth from "@/assets/icons/Earth.png";
import Expeditions from "@/assets/icons/Expeditions.png";
import FamilyLinks from "@/assets/icons/FamilyLinks.png";
import Gboard from "@/assets/icons/Gboard.png";
import Gemini from "@/assets/icons/Gemini.png";
import Gmail from "@/assets/icons/Gmail.png";
import GoogleAlert from "@/assets/icons/GoogleAlert.png";
import Cars from "@/assets/icons/google.png";
import up from "@/assets/icons/up.png";
import down from "@/assets/icons/down.png";

const products = [
  { name: "Android", icon: android },
  { name: "Chrome", icon: chrome },
  { name: "Google Maps", icon: maps },
  { name: "Google Photos", icon: photos },
  { name: "Gmail", icon: Gmail },
  { name: "Google Drive", icon: Drive },
  { name: "Cars with Google Built in", icon: Cars },
  { name: "Google Expeditions", icon: Expeditions },
  { name: "Google Earth", icon: Earth },
  { name: "Google Calendar", icon: calender },
  { name: "Google Digital Wellbeing", icon: DigitalWellbeing },
  { name: "Google Chrome Enterprise", icon: ChromeEnterprise },
  { name: "Google Family Link", icon: FamilyLinks },
  { name: "Google Gboard", icon: Gboard },
  { name: "Google Gemini", icon: Gemini },
  { name: "Google TV", icon: TV },
  { name: "Android Auto", icon: Auto },
  { name: "Google Docs", icon: Documents },
  { name: "Google Alert", icon: GoogleAlert },
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
    <div className="container mx-auto my-14">
      <hr />
      {categories.map((category, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full p-4"
            onClick={() => toggleCategory(category.name)}
          >
            <span className="text-sm text-blue-500">{category.name}</span>
            <div className="w-4 h-4 relative">
              <Image
                src={expandedCategory === category.name ? up : down}
                alt={expandedCategory === category.name ? "Collapse" : "Expand"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </button>
          <hr />
          {expandedCategory === category.name && (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col hover:cursor-pointer"
                >
                  <div className="flex relative">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={product.icon}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="h-64"
                      />
                    </div>
                    <span className="sm:text-lg md:text-sm lg:text-base ml-6">
                      {product.name}
                    </span>
                  </div>
                  <hr className="mt-6" />
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
