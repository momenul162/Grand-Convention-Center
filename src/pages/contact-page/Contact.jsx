import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import bgImg from "../../assets/bg.png";

const Contact = () => {
  return (
    <div
      className="container mx-auto rounded-lg "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-slate-500 bg-opacity-60 md:py-10 lg:py-20 md:px-4">
        <div className="breadcrumbs text-xl md:text-2xl bg-slate-300 bg-opacity-80 text-center ps-3 lg:ms-20 md:max-w-52 rounded-s-box text-lime-800 text-shadow-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-start w-full lg:text-left shadow-md rounded-md py-6 md:py-10 px-2 md:px-4 bg-slate-300 bg-opacity-80">
              <h1 className="text-3xl text-center md:text-4xl lg:text-4xl font-bold mb-6">
                Let's Contact
              </h1>
              <ul>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +8801800110011 / +8801700110011
                </li>
                <li className="flex items-center gap-2 my-3">
                  <MdEmail /> grandhall@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <IoLocationSharp /> Binodpur, 6206, Motihar, Rajshahi
                </li>
              </ul>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card w-full shadow-md bg-slate-300 bg-opacity-80">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Choose Plan</span>
                  </label>
                  <select required className="select select-primary bg-white w-full max-w-xs">
                    <option disabled selected>
                      Choose your plan
                    </option>
                    <option>Business fair ($300)</option>
                    <option>Wedding basic ($500)</option>
                    <option>Wedding plus ($800)</option>
                    <option>Corporate event ($1200)</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Contact Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="01********"
                    maxLength={11}
                    className="input input-primary bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <textarea
                    name="details"
                    className="textarea textarea-primary bg-white"
                    placeholder="Tell me details"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
