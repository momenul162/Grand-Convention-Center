import React from "react";
import Main from "./layout/Main";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./pages/home-page/About/About";
// import Package from "./pages/home-page/Package/Package";
// import Review from "./pages/home-page/Client-reviews/Review";
// import Question from "./pages/home-page/Frequently-question/Question";

const App = () => {
  return (
    <div>
      <Main />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Main />}>
    //       <Route path="about" element={<About />} />
    //       <Route path="packages" element={<Package />} />
    //       <Route path="reviews" element={<Review />} />
    //       <Route path="questions" element={<Question />} />
    //       {/* <Route path="subscribe" element={}/> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
