import React from "react";
import "./review.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="container mx-auto my-10">
      <Swiper
        autoplay={{ delay: 2500 }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 320px
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          840: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
