"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/page";
import Image from "next/image";
import LOGO from "../../images/LOGO.png";
import {
  Button,
  Input,
  Avatar,
  Badge,
  DrawerProps,
  RadioChangeEvent,
  Drawer,
} from "antd";
import {
  ArrowRightOutlined,
  BarChartOutlined,
  CloseOutlined,
  HeartOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";
import useCategoryStore from "@/store/categories/page";
import Link from "next/link";

function Index() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const { categories, getCategories } = useCategoryStore();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <header>
      <div className="py-2 bg-[#F0F0F0]">
        <Container>
          <div className="hidden xl:flex justify-between items-center">
            <ul className="flex items-center gap-4 text-sm font-medium cursor-pointer ">
              <li>Biz Haqimizda</li>
              <li>Yetkazib berish</li>
              <li>Shartnoma shartlari</li>
              <li>Bizning kafolatlar</li>
            </ul>
            <ul className="flex items-center gap-3 text-sm font-medium">
              <li>+998 71 300 30 30</li>
              <li className="px-2 py-1 bg-white rounded-lg cursor-pointer text-[#240E0066]">
                Rus
              </li>
              <li className="px-2 py-1 bg-white rounded-lg cursor-pointer text-[#240E0066]">
                Ozb
              </li>
              <li className="px-2 py-1 bg-white rounded-lg cursor-pointer text-[#240E0066]">
                Eng
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="py-4 px-4 flex flex-row justify-between  bg-white rounded-md relative items-center">
            <Link href="/">
              <Image
                className="ml-4"
                src={LOGO}
                width={140}
                height={40}
                alt="Logo"
              />
            </Link>

            <div className="hidden xl:flex gap-4 items-center mt-4 md:mt-0">
              <Button
                onClick={() => setOpen(!open)}
                className="category_btn bg-[#1EB91E] text-white text-sm font-bold py-3 px-6 h-12"
              >
                {open ? (
                  <CloseOutlined className="text-lg" />
                ) : (
                  <MenuOutlined className="text-lg " />
                )}
                Kategoriya
              </Button>
              <Input
                placeholder="Хочу купить..."
                className="search_input"
                prefix={<SearchOutlined />}
              />
            </div>

            <div
              className={`w-full absolute bg-white left-0 z-20 py-8 px-5 transition-all duration-300 ${
                open ? "top-[100px] opacity-100" : "top-[-1200px] opacity-0"
              } drawer`}
            >
              {categories.map((e, i) => (
                <div key={i} onClick={() => setActive(i)}>
                  {active === i ? (
                    <div className="bg-[#D55200] mt-2 flex items-center justify-between w-full md:w-[440px] h-[50px] py-8 px-4 rounded-xl cursor-pointer card">
                      <PhoneOutlined className="w-15 h-15 bg-[#FF800B1A] rounded-full p-5 text-[#FFFFFF]" />
                      <p className="text-white">{e.name}</p>
                      <ArrowRightOutlined className="text-white" />
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center justify-between w-full md:w-[440px] h-[50px] py-8 px-4 bg-white rounded-xl cursor-pointer card hover:bg-[#f2f2f2]">
                      <PhoneOutlined className="w-15 h-15 bg-[#FF800B1A] rounded-full p-5 text-[#D55200]" />
                      <p>{e.name}</p>
                      <ArrowRightOutlined />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden xl:flex items-center gap-3 mt-4 md:mt-0">
              <Badge count={2}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <HeartOutlined className="text-lg text-black" />
                </Avatar>
              </Badge>
              <Badge count={6}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <BarChartOutlined className="text-lg text-black" />
                </Avatar>
              </Badge>
              <Badge count={7}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <ShoppingCartOutlined className="text-lg text-black" />
                </Avatar>
              </Badge>
              <Avatar
                size="large"
                icon={<UserOutlined className="text-lg text-black" />}
                className="bg-[#F0F0F0] cursor-pointer"
              />
            </div>

            <div className="block xl:hidden ">
              <MenuOutlined onClick={showDrawer} />
            </div>
          </div>
        </Container>
      </div>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={true}
        onClose={onClose}
        open={drawerOpen}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </header>
  );
}

export default Index;
