import React from "react";
import weddingImg from "../../../assets/wedding.jpg";

const About = () => {
  return (
    <div id="about" className="hero my-16 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:px-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl lg:mb-10 font-bold">
            Every moment is Precious{" "}
          </h1>
          <p className="py-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Quas reprehenderit eligendi
            repudiandae quisquam architecto consequuntur neque nostrum doloribus voluptates, harum
            placeat tempora voluptatibus explicabo tenetur inventore vero non pariatur. Nulla!
          </p>
        </div>
        <div className="card w-full max-w-md shrink-0">
          <img className="border-4 rounded-lg" src={weddingImg} alt="hello" />
        </div>
      </div>
    </div>
  );
};

export default About;
