"use client";
import React, { useCallback, useState } from "react";
import Container from "../../components/container/page";
import ProductCard from "../../components/products/page";
import { Button, Input, Avatar, Badge, Drawer } from "antd";
import { Slider } from "antd";
import { Radio } from "antd";
import {
  BarChartOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";
import Link from "next/link";

function Index() {
  const [slide1, setSlide1] = useState(3000000); // Default value in millions
  const [slide2, setSlide2] = useState(13000000); // Default value in millions

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prevState) => !prevState);
  }, []);

  const convertToSliderValue = (value: any) =>
    Math.round((value - 40000) / 10000);
  const convertToMillionValue = (value: any) => value * 100000 + 1000000;

  const onChange = (value: any) => {
    setSlide1(convertToMillionValue(value[0]));
    setSlide2(convertToMillionValue(value[1]));
  };

  const onChangeComplete = (value: any) => {
    setSlide1(convertToMillionValue(value[0]));
    setSlide2(convertToMillionValue(value[1]));
  };

  return (
    <div>
      <Container>
        <p className="flex gap-[20px] mt-[20px]">
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Bosh sahifa
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
            Smartfonlar
          </span>
        </p>
      </Container>
      <div className="mt-[24px] h-auto">
        <Container>
          <div className="flex gap-[48px] justify-between">
            <div className="w-[356px] h-[auto] rounded-[10px] bg-[white] p-[40px]">
              <p className="flex gap-2 items-center mb-[20px]">
                <span className="font-bold text-[14px] lg:text-[24px]">
                  Narx
                </span>
                <span className="text-[12px] lg:text-[18px] ">(Somda)</span>
              </p>

              <div className="flex justify-between mb-[20px]">
                <div className="w-[86px] lg:w-[116px]">
                  <p className="text-[#240E00CC] text-[12px]">...dan</p>
                  <p className="w-full h-[34px] lg:h-[54px] px-[16px] py-[8px] lg:py-[12px] bg-[#F0F0F0] rounded-md text-[12px] lg:text-[18px] text-[#240E00] font-medium">
                    {slide1.toLocaleString()}
                  </p>
                </div>
                <div className="w-[86px] xl:w-[116px] ml-[8px]">
                  <p className="text-[#240E00CC] text-[12px]">...gacha</p>
                  <p className="w-full h-[34px] lg:h-[54px] px-[14px] py-[8px] lg:py-[12px] bg-[#F0F0F0] rounded-md text-[12px] lg:text-[18px] text-[#240E00] font-medium">
                    {slide2.toLocaleString()}
                  </p>
                </div>
              </div>

              <Slider
                range
                step={1}
                defaultValue={[
                  convertToSliderValue(slide1),
                  convertToSliderValue(slide2),
                ]}
                tooltipVisible={false} // Disable tooltip
                onChange={onChange}
                onChangeComplete={onChangeComplete}
              />

              <div>
                <h2 className="font-bold  text-[24px]">Brendlar</h2>
                <Radio.Group
                  defaultValue="Samsung"
                  className="flex flex-col gap-[7px] mt-[12px]"
                >
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="Samsung"
                  >
                    Samsung
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="Artel"
                  >
                    Artel
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="Vivo"
                  >
                    Vivo
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="Realmi"
                  >
                    Realmi
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="Xiaomi"
                  >
                    Xiaomi
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="Apple"
                  >
                    Apple
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="Tecno"
                  >
                    Tecno
                  </Radio>
                </Radio.Group>
              </div>
              <div className="mt-[24px]">
                <h2 className="font-bold  text-[24px]">Tezkor xotira RAM</h2>
                <Radio.Group
                  defaultValue="2"
                  className="flex flex-col gap-[7px] mt-[12px]"
                >
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="2"
                  >
                    2 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="3"
                  >
                    3 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="4"
                  >
                    4 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="6"
                  >
                    6 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="8"
                  >
                    8 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="12"
                  >
                    12 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="16"
                  >
                    16 GB
                  </Radio>
                </Radio.Group>
              </div>
              <div className="mt-[24px]">
                <h2 className="font-bold  text-[24px]">Doiymi xotira ROM</h2>
                <Radio.Group
                  defaultValue="32"
                  className="flex flex-col gap-[7px] mt-[12px]"
                >
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="32"
                  >
                    32 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="64"
                  >
                    64 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="128"
                  >
                    128 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="256"
                  >
                    256 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="512"
                  >
                    512 GB
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-medium"
                    value="1024"
                  >
                    1024 GB
                  </Radio>
                </Radio.Group>
              </div>
              <div className="mt-[24px]">
                <h2 className="font-bold  text-[24px]">Akkumulyator hajmi</h2>
                <Radio.Group
                  defaultValue="3000"
                  className="flex flex-col gap-[7px] mt-[12px]"
                >
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-light lg:font-medium"
                    value="3200"
                  >
                    3200 mAh
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-light lg:font-medium"
                    value="3600"
                  >
                    3600 mAh
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-light lg:font-medium"
                    value="4000"
                  >
                    4000 mAh
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-light lg:font-medium"
                    value="4500"
                  >
                    4500 mAh
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-light lg:font-medium"
                    value="5000"
                  >
                    5000 mAh
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-light lg:font-medium"
                    value="6000"
                  >
                    6000 mAh
                  </Radio>
                  <Radio
                    className="text-[12px] lg:text-[18px]  text-[#240E00CC] font-light lg:font-medium"
                    value="7000"
                  >
                    7000 mAh
                  </Radio>
                </Radio.Group>
              </div>
            </div>

            <div className=" flex flex-wrap ml-7 sm:ml-2 md:ml-0  gap-[20px] w-[956px] mx-auto justify-center items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => (
                <ProductCard key={i} />
              ))}
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
          <Link href="/login">
            <Avatar
              size="large"
              icon={<UserOutlined className="text-lg text-black" />}
              className="bg-[#F0F0F0] cursor-pointer"
            />
          </Link>
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
    </div>
  );
}

export default Index;
