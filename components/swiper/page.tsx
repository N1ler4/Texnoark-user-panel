"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ProductCard from "../products/page";
import "./style.css";
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30} // Set a default space between slides
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        autoplay
        centeredSlidesBounds={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30, // Maintain consistent spacing at each breakpoint
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 40, // Adjust space if needed for different screen sizes
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50, // Adjust space if needed for different screen sizes
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
