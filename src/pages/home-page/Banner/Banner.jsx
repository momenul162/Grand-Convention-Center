import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Parallax } from "react-parallax";
import bgimg from "../../../assets/bg-banner.jpg";
import Navbar from "../../../shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Parallax blur={{ min: -30, max: 30 }} bgImage={bgimg} bgImageAlt="" strength={-200}>
      <div className="bg-emerald-900 bg-opacity-40">
        <Navbar />
        <div className="hero-content text-center h-[430px] md:h-[600px] lg:h-[700px] mx-auto">
          <div className="mt-10">
            <h1 className="mb-5 text-2xl md:text-5xl text-lime-500 font-bold text-shadow-lg">
              The perfect venue for your next event
            </h1>
            <p className="mb-5 md:text-3xl text-white text-shadow-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit
            </p>
            <p className="text-2xl md:text-4xl text-shadow text-lime-500">
              {" "}
              <Typewriter
                words={["Business fair", "Wedding basic", "Wedding plus", "Corporate event"]}
                loop={true}
                cursor
                typeSpeed={70}
                delaySpeed={2000}
              />
            </p>
            <Link to="/contact">
              <button class="btn btn-primary text-neutral-50 px-10 mt-6">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
