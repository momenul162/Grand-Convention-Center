import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Package = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch("/pricing.json")
      .then((response) => response.json())
      .then((data) => setPricing(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-2xl md:text-4xl text-center mb-10 text-neutral-600 font-bold text-shadow divider">
        Our Packages
      </h2>
      <div
        id="packages"
        class="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4"
      >
        {pricing &&
          pricing.map((data) => (
            <div
              key={data.id}
              class="card w-80 py-5 shadow-xl border-2 zoom hover:bg-slate-100 transition-transform hover:scale-105 duration-300"
            >
              <div class="card-body">
                <h2 class="card-title text-3xl font-bold">{data.title}</h2>
                <p class="text-gray-600">{data.description}</p>
                <div class="my-4 text-3xl text-neutral-800 font-bold">
                  $
                  <span class="text-5xl text-neutral-600 font-bold text-shadow-sm">
                    {data.price}
                  </span>
                </div>
                <ul class="list-disc list-inside">
                  {data?.features.map((item) => (
                    <li class="flex items-center">
                      <svg
                        class="w-5 h-5 text-white bg-slate-400 rounded-full"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span class="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <div class="card-actions justify-center mt-4">
                    <button class="btn btn-primary text-neutral-800 bg-transparent mt-4">
                      Choose Plan
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Package;
