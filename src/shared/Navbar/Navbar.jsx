import React from "react";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#packages">Packages</a>
      </li>
      <li>
        <a href="#reviews">Reviews</a>
      </li>
      <li>
        <a href="#qna">QNA</a>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 bg-slate-600">
      <div className="navbar container mx-auto">
        <div className="navbar-center md:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 bg-slate-300 text-center text-lime-800 font-bold text-shadow-sm"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl md:text-4xl text-center text-lime-500 font-bold text-shadow">
            Grand Hall
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl md:text-2xl text-center text-lime-500 font-bold text-shadow">
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
