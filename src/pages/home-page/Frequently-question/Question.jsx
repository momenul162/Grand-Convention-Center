import React from "react";
import img from "../../../assets/decoration.jpg";

const Question = () => {
  return (
    <div id="qna" className="my-16 container mx-auto">
      <h2 className="text-xl md:text-4xl text-center mb-10 text-neutral-600 font-bold text-shadow divider">
        Frequently Asked Any Questions
      </h2>
      <div className="hero">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div>
            <ul className="menu menu-horizontal px-1 flex flex-col max-w-lg">
              <li>
                <details>
                  <summary className="font-bold">
                    What’s the difference between event design and event planning?{" "}
                  </summary>
                  <p className="p-2 bg-white rounded-md">
                    Event design and event planning work hand in hand to deliver a successful
                    event.Events by Knight offer tailor made events. This means we incorporate both
                    event design and event planning to create that perfect event.
                  </p>
                </details>
              </li>
              <div className="divider"></div>
              <li>
                <details>
                  <summary className="font-bold">
                    How early do we need to start planning an event?
                  </summary>
                  <p className="p-2 bg-white rounded-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia ipsam
                    neque quod praesentium non reprehenderit porro earum eaque fugit dolorem eius
                    qui nihil ullam sapiente, vitae explicabo a numquam?
                  </p>
                </details>
              </li>
              <div className="divider"></div>
              <li>
                <details>
                  <summary className="font-bold">
                    What is your refund and cancellation policy?
                  </summary>
                  <p className="p-2 bg-white rounded-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia ipsam
                    neque quod praesentium non reprehenderit porro earum eaque fugit dolorem eius
                    qui nihil ullam sapiente, vitae explicabo a numquam?
                  </p>
                </details>
              </li>
              <div className="divider"></div>
              <li>
                <details>
                  <summary className="font-bold">How do you keep budgets on track?</summary>
                  <p className="p-2 bg-white rounded-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia ipsam
                    neque quod praesentium non reprehenderit porro earum eaque fugit dolorem eius
                    qui nihil ullam sapiente, vitae explicabo a numquam?
                  </p>
                </details>
              </li>
            </ul>
          </div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <img className="border-4 rounded-lg" src={img} alt="hello" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
