import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import bgImg from "../../assets/bg.png";

const defaultValue = {
  plan: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [data, setData] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(defaultValue);

    // You can perform additional actions here, like sending the form data to an API
    // Example: fetch('/api/submitForm', { method: 'POST', body: JSON.stringify(data) })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

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
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Choose Plan</span>
                  </label>
                  <select
                    required
                    name="plan"
                    value={data?.plan}
                    onChange={handleChange}
                    className="select select-primary bg-white w-full max-w-xs"
                  >
                    <option value="" disabled>
                      Choose your plan
                    </option>
                    <option value="Business Fair">Business fair ($300)</option>
                    <option value="Wedding Basic">Wedding basic ($500)</option>
                    <option value="Wedding Plus">Wedding plus ($800)</option>
                    <option value="Corporate Event">Corporate event ($1200)</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Contact Number</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={data?.phone}
                    onChange={handleChange}
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
                    name="message"
                    value={data?.message}
                    onChange={handleChange}
                    className="textarea textarea-primary bg-white"
                    placeholder="Tell me details"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button
                    // onClick={() => document.getElementById("my_modal_5").showModal()}
                    type="submit"
                    className="btn btn-primary text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* Open the modal using document.getElementById('ID').showModal() method */}

              {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                  <p className="py-4">Thanks for your response</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-outline bg-white">Close</button>
                    </form>
                  </div>
                </div>
              </dialog> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
