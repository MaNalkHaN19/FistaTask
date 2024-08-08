import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import Icons from "./icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className=" px-4 mx-12 lg:my-6 lg:mx-28">
        <Icons />
        <hr className="my-6"></hr>
        <Nav />
        <hr className="my-6"></hr>
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center space-x-4">
            <span>Google</span>
            <Link href="#" className="hover:underline">
              Help
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
