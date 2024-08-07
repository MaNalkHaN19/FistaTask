import Header from "@/components/header";
import Modal from "@/components/modal";
import LatestProductNews from "@/components/latestProducts";
import Film from "@/components/film";
import Features from "@/components/features";
import Explore from "@/components/explore";
import Assets from "@/components/assets";
import Growth from "@/components/Grow";
import Career from "@/components/careers";
import Interview from "@/components/interview";
import Google from "@/components/Google";
import Services from "@/components/Services/services"

import Footer from "@/components/Footer/footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col content-center justify-center">
        <div className="mx-12 lg:my-6 lg:mx-28 pt-14 ">
          <div className="flex flex-col bg-white ">
            <h1 className=" text-gray-900 text-2xl text-center md:text-center md:text-7xl md:ml-0 sm:ml-0 lg:text-left  lg:text-8xl">
              Helpful products.
            </h1>
            <h2 className="mt-2  text-gray-900 text-2xl text-center md:text-center md:text-7xl md:ml-0 sm:ml-0  lg:text-right lg:text-8xl">
              Built with you in mind.
            </h2>
          </div>
          <div className="pt-16">
            <Modal />
          </div>
          <LatestProductNews />
          <Film />
          <Features />
          <Explore />
          <Assets />
          <Growth />
          <Career />
          <Interview/>
          <hr className="my-16"></hr>
          <Google/>
          <Services/>
        </div>
        <Footer />
      </main>
    </>
  );
}
