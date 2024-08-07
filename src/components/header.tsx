"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import googlelogo from "@/assets/google-logo.jpg";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-14 bg-white border-b">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden text-gray-700 focus:outline-none transition duration-300"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <span className=" font-serif text-2xl text-gray-600">About</span>
          <Image src={googlelogo} alt="Google" width={80} height={20} />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-blue-500">
            About
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-blue-500"
          >
            Products
          </Link>
          <Link
            href="/commitments"
            className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-blue-500"
          >
            Commitments
          </Link>
          <Link href="/stories" className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-blue-500">
            Stories
          </Link>
        </nav>
      </div>
     {isMenuOpen && (
  <div
    className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50"
    onClick={toggleMenu} // Add this to close the menu when clicking on the overlay
  >
    <div
      className="bg-white w-44 h-full p-4 shadow-md"
      onClick={(e) => e.stopPropagation()}
    >
      {" "}
      <nav className="md:hidden flex flex-col mt-4 space-y-2 justify-start">
        <Link href="/about" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
          About
        </Link>
        <Link
          href="/products"
          className="text-gray-700 hover:text-gray-900 "
          onClick={toggleMenu}
        >
          Products
        </Link>
        <Link
          href="/commitments"
          className="text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          Commitments
        </Link>
        <Link
          href="/stories"
          className="text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          Stories
        </Link>
      </nav>
    </div>
  </div>
)}
    </header>
  );
}
