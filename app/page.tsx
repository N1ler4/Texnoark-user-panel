"use client";
import Carusel from "../components/carusel/page";
import {
  ArrowRightOutlined,
  BarChartOutlined,
  HeartOutlined,
  MenuOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Container from "../components/container/page";
import "./globals.css";
import { Button } from "antd";
import Image from "next/image";
import Footer_Banner from "../images/Footer_Banner.png";
import Swiper from "../components/swiper/page";
import useCategoryStore from "@/store/categories/page";
import { useEffect, useState } from "react";
import Aksiya from "@/images/Aksiya.svg";
import Telefon from "@/images/mobile.svg";
import WashingCard from "@/images/washing_machine.svg";
import Desktop from "@/images/desktop.svg";
import Konditseoner from "@/images/konditseoner.svg";
import Link from "next/link";

export default function Home() {
  const { categories, getCategories } = useCategoryStore();
  const iconCategory = [Aksiya, Telefon, WashingCard, Desktop, Konditseoner];

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="mt-[24px]">
        <Carusel />
      </div>

      <div className="mt-[60px] categ ">
        <Container>
          <div className="flex items-center flex-wrap justify-between gap-[20px] duration-200	ml-[40px] lg:ml-0">
            {categories.slice(0, 5).map((e, i) => {
              return (
                <Link
                  href={"/categories"}
                  key={i}
                  onClick={() =>
                    localStorage.setItem("CategoryId", JSON.stringify(e.id))
                  }
                >
                  <div className="duration-200 hover:scale-105 flex items-center justify-between w-[350px] lg:w-[440px] h-[100px] lg:h-[120px] py-[45px] px-[59px] bg-white rounded-xl cursor-pointer card">
                    <Image
                      src={iconCategory[i]}
                      alt="Logo"
                      width={30}
                      height={30}
                      className="w-[60px] h-[60px] bg-[#FF800B1A] rounded-full p-[20px] text-[#D55200]"
                    />
                    {e.name}
                    <ArrowRightOutlined />
                  </div>
                </Link>
              );
            })}
            <Link
              href={"/categories"}
              onClick={() =>
                localStorage.setItem("CategoryId", JSON.stringify(0))
              }
            >
              <div className="duration-200 hover:scale-105 flex items-center justify-between w-[350px] lg:w-[440px] h-[100px] lg:h-[120px] py-[45px] px-[59px] bg-white rounded-xl cursor-pointer card">
                <MenuOutlined className="w-[60px] h-[60px] bg-[#FF800B1A] rounded-full p-[20px] text-[#D55200]" />
                Hammasi
                <ArrowRightOutlined />
              </div>
            </Link>
          </div>
        </Container>
      </div>

      <div className="mt-[64px]">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[32px] sm:text-[16px]">
              Ommabob mahsulotlar
            </h1>
            <Button className="btn_all">
              Hammasi <ArrowRightOutlined />
            </Button>
          </div>

          <div className="mt-[24px] lg:px-0 px-[60px] lg:ml-0">
            <Swiper />
          </div>
        </Container>
      </div>

      <div className="mt-[64px]">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[32px] ">Populyarniy mahsulotlar</h1>
            <Button className="btn_all">
              Hammasi <ArrowRightOutlined />
            </Button>
          </div>

          <div className="mt-[24px] lg:px-0 px-[60px] lg:ml-0">
            <Swiper />
          </div>
        </Container>
      </div>

      <div className="mt-[64px]">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[32px] ">Aksiyadagi mahsulotlar</h1>
            <Button className="btn_all">
              Hammasi <ArrowRightOutlined />
            </Button>
          </div>

          <div className="mt-[24px] px-[60px] lg:px-0 lg:ml-0">
            <Swiper />
          </div>
        </Container>
      </div>

      <div className="mt-[67px]">
        <Container>
          <div>
            <Image src={Footer_Banner} alt="Banner" />
          </div>
        </Container>
      </div>
    </>
  );
}
