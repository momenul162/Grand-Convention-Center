import React from "react";
import Footer from "../shared/Footer/Footer";
import Banner from "../pages/home-page/Banner/Banner";
import About from "../pages/home-page/About/About";
import Package from "../pages/home-page/Package/Package";
import Question from "../pages/home-page/Frequently-question/Question";
import Review from "../pages/home-page/Client-reviews/Review";
import Album from "../pages/Album/Album";

const Main = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-300 to-pink-300">
      <Banner />
      <About />
      <Package />
      <Question />
      <Review />
      <Album />
      <Footer />
    </div>
  );
};

export default Main;
