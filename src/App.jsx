import React from "react";
import Main from "./layout/Main";
import Contact from "./pages/contact-page/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./pages/home-page/About/About";
// import Package from "./pages/home-page/Package/Package";
// import Review from "./pages/home-page/Client-reviews/Review";
// import Question from "./pages/home-page/Frequently-question/Question";

const App = () => {
  return (
    // <div>
    //   <Main />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
