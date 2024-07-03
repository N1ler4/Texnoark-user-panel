"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ProductCard from "../products/page";
import "./style.css";
import { FreeMode, Pagination } from "swiper/modules";
import useProductStore from "@/store/products/page";

export default function App() {
  const [data, setData] = useState([]);
  const { getProduct } = useProductStore();

  const getData = async () => {
    const res = await getProduct("", 10, 1);
    if (res && res.status === 200) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          369: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 60,
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
      </Swiper>
    </>
  );
}
