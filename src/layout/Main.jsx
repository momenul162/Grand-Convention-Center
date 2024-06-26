import React from "react";
import Footer from "../shared/Footer/Footer";
import Banner from "../pages/home-page/Banner/Banner";
import About from "../pages/home-page/About/About";
import Package from "../pages/home-page/Package/Package";
import Question from "../pages/home-page/Frequently-question/Question";
import Review from "../pages/home-page/Client-reviews/Review";

const Main = () => {
  return (
    <div>
      <Banner />
      <About />
      <Package />
      <Review />
      <Question />
      <Footer />
    </div>
  );
};

export default Main;
