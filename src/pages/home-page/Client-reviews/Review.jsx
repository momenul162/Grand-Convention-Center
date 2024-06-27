import React from "react";
import "./review.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div id="reviews" className="container mx-auto my-16">
      <h2 className="text-2xl md:text-4xl text-center mb-8 text-neutral-600 font-bold text-shadow divider">
        Happy Clients Says
      </h2>
      <Swiper
        autoplay={{ delay: 2500 }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 320px
          400: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // when window width is >= 480px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          840: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-3 py-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi recusandae deserunt
              beatae nostrum velit quia earum magnam, distinction.
            </p>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-shadow-sm ">John doe</h2>
              <p>Businessman</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-3 py-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi recusandae deserunt
              beatae nostrum velit quia earum magnam, distinction.
            </p>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-shadow-sm ">John doe</h2>
              <p>Businessman</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-3 py-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi recusandae deserunt
              beatae nostrum velit quia earum magnam, distinction.
            </p>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-shadow-sm ">John doe</h2>
              <p>Businessman</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-3 py-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi recusandae deserunt
              beatae nostrum velit quia earum magnam, distinction.
            </p>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-shadow-sm ">John doe</h2>
              <p>Businessman</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
