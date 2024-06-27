import React from "react";
import weddingImg from "../../../assets/wedding.jpg";

const About = () => {
  return (
    <div id="about" className="hero my-16 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Every moment is Precious </h1>
          <p className="py-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="card w-full max-w-lg shrink-0 shadow-2xl">
          <img src={weddingImg} alt="hello" />
        </div>
      </div>
    </div>
  );
};

export default About;
