"use client";
import React, { useEffect, useState, useCallback } from "react";
import Container from "../container/page";
import Image from "next/image";
import LOGO from "../../images/LOGO.png";
import { Button, Input, Avatar, Badge, Drawer } from "antd";
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
import useSubCategoryStore from "@/store/sub-categories/page";
import { getAccessToken, getId } from "@/helpers/auth-helpers";
import useLikeStore from "@/store/like";

function Index() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const { categories, getCategories } = useCategoryStore();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { getSubCategories } = useSubCategoryStore();
  const [subCategory, setSubCategory] = useState<any>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [count, setCount] = useState<any>();

  const { getLike } = useLikeStore();

  console.log(subCategory);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prevState) => !prevState);
  }, []);

  const toggleCategory = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const handleCategoryClick = useCallback(
    async (i: any, id: any) => {
      setActive(i);
      const subCategories = await getSubCategories(id);
      setSubCategory(subCategories.data.data.subcategories);
    },
    [getSubCategories]
  );

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const checkToken = async () => {
    const token = getAccessToken();
    return !!token;
  };

  useEffect(() => {
    const verifyToken = async () => {
      const authenticated = await checkToken();
      setIsAuthenticated(authenticated);
    };

    verifyToken();
  }, []);

  const id = getId();

  const getLikeCount = async () => {
    const res = await getLike(id);
    console.log(res);
    if (res && res.status === 200) {
      setCount(res.data.data.count);
    }
  };
  useEffect(() => {
    getLikeCount();
  }, [getLikeCount]);
  const handleAboutClick = () => {
    localStorage.setItem("aboutus", "Texnoark haqida");
  };

  return (
    <header>
      <div className="py-2 bg-[#F0F0F0]">
        <Container>
          <div className="hidden xl:flex justify-between items-center">
            <ul className="flex items-center gap-4 text-sm font-medium cursor-pointer">
              <li>
                <Link
                  href="/about"
                  onClick={handleAboutClick}
                >
                  Biz Haqimizda
                </Link>
              </li>
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
          <div className="py-4 px-4 flex flex-row justify-between bg-white rounded-md relative items-center">
            <Link href="/">
              <Image
                className="ml-4"
                src={LOGO}
                width={140}
                height={40}
                alt="Logo"
              />
            </Link>

            <div className="flex gap-4 items-center mt-4 md:mt-0">
              <Button
                onClick={toggleCategory}
                className="category_btn bg-[#1EB91E] text-white text-sm font-bold py-3 px-6 h-12"
              >
                {open ? (
                  <CloseOutlined className="text-lg" />
                ) : (
                  <MenuOutlined className="text-lg" />
                )}
                Kategoriya
              </Button>
              <div className=" hidden lg:inline">
                <Input
                  placeholder="Хочу купить..."
                  className="search_input"
                  prefix={<SearchOutlined />}
                />
              </div>
            </div>

            <div
              className={`w-full absolute bg-white left-0 z-20 py-8 px-5 transition-all duration-300 ${
                open ? "top-[100px] opacity-100" : "top-[-1200px] opacity-0"
              } drawer`}
            >
              <div className="flex">
                <div className="border-r-2 pr-10 border-[#331400]">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      onClick={() => handleCategoryClick(index, category.id)}
                    >
                      {active === index ? (
                        <div className="bg-[#D55200] mt-2 flex items-center justify-between w-[200px] md:w-[400px] h-[50px] py-8 px-4 rounded-xl cursor-pointer card text-[14px]">
                          <PhoneOutlined className="w-15 h-15 bg-[#FF800B1A] rounded-full p-5 text-[#FFFFFF]" />
                          <p className="text-white">{category.name}</p>
                          <ArrowRightOutlined className="text-white" />
                        </div>
                      ) : (
                        <div className="mt-2 flex items-center justify-between w-[200px] md:w-[400px] h-[50px] py-8 px-4 bg-white rounded-xl cursor-pointer card hover:bg-[#f2f2f2] text-[14px]">
                          <PhoneOutlined className="w-15 h-15 bg-[#FF800B1A] rounded-full p-5 text-[#D55200]" />
                          <p>{category.name}</p>
                          <ArrowRightOutlined />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {subCategory.length ? (
                  <>
                    <div className="flex flex-col justify-start items-center w-full px-5 mt-2">
                      {subCategory.map((e: any) => {
                        return (
                          <Link href={"/#"} className="w-full" key={e.id}>
                            <div className="h-[65px] w-full mb-2 bg-[#F5F5F5] rounded-xl">
                              <div className="py-5 pl-5 items-center justify-center w-full flex flex-col">
                                <div className="h-[50px] w-full">
                                  <Link href={`#`}>{e.name}</Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="px-5 py-5">Not Found</div>
                )}
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-3 mt-4 md:mt-0">
              <div>
                {isAuthenticated ? (
                  <Link href={"/profile"}>
                    {" "}
                    <Badge count={count}>
                      <Avatar
                        shape="square"
                        size="large"
                        className="bg-[#F0F0F0] cursor-pointer"
                        onClick={() => {
                          localStorage.setItem(
                            "aboutus",
                            "Yoqtirgan mahsulotlar"
                          );
                        }}
                      >
                        <HeartOutlined className="text-lg text-black" />
                      </Avatar>
                    </Badge>
                  </Link>
                ) : (
                  <Link href={"/login"}>
                    <Badge count={2}>
                      <Avatar
                        shape="square"
                        size="large"
                        className="bg-[#F0F0F0] cursor-pointer"
                      >
                        <HeartOutlined className="text-lg text-black" />
                      </Avatar>
                    </Badge>
                  </Link>
                )}
              </div>
              <Badge count={6}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <BarChartOutlined className="text-lg text-black" />
                </Avatar>
              </Badge>
              <Link href={"/cart"}>
                <Badge count={7}>
                  <Avatar
                    shape="square"
                    size="large"
                    className="bg-[#F0F0F0] cursor-pointer"
                  >
                    <ShoppingCartOutlined className="text-lg text-black" />
                  </Avatar>
                </Badge>
              </Link>
              <div>
                {isAuthenticated ? (
                  <>
                    {" "}
                    <Link href="/profile">
                      <Avatar
                        size="large"
                        icon={<UserOutlined className="text-lg text-black" />}
                        className="bg-[#F0F0F0] cursor-pointer"
                        onClick={() => {
                          localStorage.setItem("aboutus", "Shaxsiy malumotlar");
                        }}
                      />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Avatar
                        size="large"
                        icon={<UserOutlined className="text-lg text-black" />}
                        className="bg-[#F0F0F0] cursor-pointer"
                      />
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="block xl:hidden">
              <MenuOutlined onClick={toggleDrawer} />
            </div>
          </div>
        </Container>
      </div>

      <Drawer
        title=""
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={drawerOpen}
      >
        <div className="flex items-center gap-5 mt-4 md:mt-0 mb-[40px]">
          <div>
            {isAuthenticated ? (
              <Link href={"/profile"}>
                {" "}
                <Badge count={count}>
                  <Avatar
                    shape="square"
                    size="large"
                    className="bg-[#F0F0F0] cursor-pointer"
                    onClick={() => {
                      localStorage.setItem("aboutus", "Yoqtirgan mahsulotlar");
                    }}
                  >
                    <HeartOutlined className="text-lg text-black" />
                  </Avatar>
                </Badge>
              </Link>
            ) : (
              <Link href={"/login"}>
                <Badge count={2}>
                  <Avatar
                    shape="square"
                    size="large"
                    className="bg-[#F0F0F0] cursor-pointer"
                  >
                    <HeartOutlined className="text-lg text-black" />
                  </Avatar>
                </Badge>
              </Link>
            )}
          </div>
          <Badge count={6}>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
            >
              <BarChartOutlined className="text-lg text-black" />
            </Avatar>
          </Badge>
          <Link href={"/cart"}>
            <Badge count={7}>
              <Avatar
                shape="square"
                size="large"
                className="bg-[#F0F0F0] cursor-pointer"
              >
                <ShoppingCartOutlined className="text-lg text-black" />
              </Avatar>
            </Badge>
          </Link>
          <div>
            {isAuthenticated ? (
              <>
                {" "}
                <Link href="/profile">
                  <Avatar
                    size="large"
                    icon={<UserOutlined className="text-lg text-black" />}
                    className="bg-[#F0F0F0] cursor-pointer"
                    onClick={() => {
                      localStorage.setItem("aboutus", "Shaxsiy malumotlar");
                    }}
                  />
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Avatar
                    size="large"
                    icon={<UserOutlined className="text-lg text-black" />}
                    className="bg-[#F0F0F0] cursor-pointer"
                  />
                </Link>
              </>
            )}
          </div>
        </div>
        <ul className="flex flex-wrap gap-5 mb-[40px]">
          <li className="w-[150px]">Biz haqimizda</li>
          <li className="w-[150px]">Yetkazib berish</li>
          <li className="w-[150px]">Shartnoma shartlari</li>
          <li className="w-[150px]">Bizning kafolatlar</li>
        </ul>
        <div className="lg:hidden inline mt-[40px]">
          <Input
            placeholder="Хочу купить..."
            className=""
            size="large"
            prefix={<SearchOutlined />}
          />
        </div>
      </Drawer>
    </header>
  );
}

export default Index;
