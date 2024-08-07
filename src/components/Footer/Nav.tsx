"use client";
import React, { useState } from "react";
import Link from "next/link";

interface SectionProps {
  title: string;
  links: { href: string; label: string }[];
}

const Section: React.FC<SectionProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
        <button
          onClick={toggleSection}
          className="md:hidden text-gray-600"
        >
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      <ul className={`${isOpen ? "block" : "hidden"} md:block`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <>
      <div className="grid  md:grid-cols-4 gap-4 text-gray-600">
        <Section
          title="Company resources"
          links={[
            { href: "#", label: "Contact us" },
            { href: "#", label: "Help center" },
            { href: "#", label: "Locations" },
            { href: "#", label: "Careers" },
            { href: "#", label: "Blog" },
            { href: "#", label: "Press resources" },
            { href: "#", label: "Investor relations" },
            { href: "#", label: "Brand Resource Center" },
          ]}
        />
        <Section
          title="Featured products"
          links={[
            { href: "#", label: "Google Ads" },
            { href: "#", label: "Android" },
            { href: "#", label: "Chrome" },
            { href: "#", label: "Google Cloud" },
            { href: "#", label: "Google for Education" },
            { href: "#", label: "Gmail" },
            { href: "#", label: "Google Maps" },
            { href: "#", label: "Google Photos" },
            { href: "#", label: "Google Play" },
            { href: "#", label: "Google Shopping" },
            { href: "#", label: "Google Search" },
            { href: "#", label: "Google for Small Business" },
            { href: "#", label: "Google Store" },
            { href: "#", label: "Google Workspace" },
            { href: "#", label: "YouTube" },
            { href: "#", label: "View all products" },
          ]}
        />
        <Section
          title="Responsibility"
          links={[
            { href: "#", label: "Accessibility" },
            { href: "#", label: "Crisis response" },
            { href: "#", label: "Digital wellbeing" },
            { href: "#", label: "Diversity & inclusion" },
            { href: "#", label: "Google.org" },
            { href: "#", label: "Google Public Sector" },
            { href: "#", label: "Grow with Google" },
            { href: "#", label: "Human rights" },
            { href: "#", label: "Learning" },
            { href: "#", label: "Safety Center" },
            { href: "#", label: "Supplier responsibility" },
            { href: "#", label: "Sustainability" },
          ]}
        />
        <Section
          title="More about us"
          links={[
            { href: "#", label: "Transparency report" },
            { href: "#", label: "Community guidelines" },
            { href: "#", label: "How our business works" },
            { href: "#", label: "Extended workforce" },
            { href: "#", label: "Transparency Center" },
          ]}
        />
      </div>
    </>
  );
};

export default Page;
