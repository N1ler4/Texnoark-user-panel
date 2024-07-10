"use client";
import { Slider, Radio } from "antd";
import React, { useState } from "react";

export default function Index() {
  const [slide1, setSlide1] = useState(3000000); // Default value in millions
  const [slide2, setSlide2] = useState(13000000); // Default value in millions
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
    <>
      <div className="w-[356px] h-[auto] rounded-[10px] bg-[white] p-[40px] hidden lg:block">
        <p className="flex gap-2 items-center mb-[20px]">
          <span className="font-bold text-[14px] lg:text-[24px]">Narx</span>
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
    </>
  );
}
