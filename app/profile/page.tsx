"use client";
import Container from "@/components/container/page";
import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import Card from "@/components/products/page";

export default function page() {
  const [aboutactive, setAboutActive] = useState("Shaxsiy malumotlar");
  const arr = [
    "Shaxsiy malumotlar",
    "Yoqtirgan mahsulotlar",
    "Xaridlar tarixi",
    "To’lovlar tarixi",
  ];
  const cardCount = []
  for (let i = 1; i < 10; i++) {
    cardCount.push(i);
  }

  return (
    <>
      <Container>
        <div className="flex gap-3 mt-5">
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Bosh sahifa
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E00CC] bg-[#FFFFFF] grid justify-center items-center">
            Accout
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex gap-5 mt-10 w-full">
          <div className="w-[30%] h-[424px] bg-white rounded-xl p-[30px]">
            <div className="flex flex-col gap-[12px] mt-[24px]">
              {arr.map((e, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => setAboutActive(e)}
                    className={`py-[14px] px-[28px] flex justify-between items-center w-full font-bold text-[18px] rounded-xl ${
                      aboutactive == e
                        ? "bg-[#FF6F14] text-white duration-300"
                        : "bg-white text-black duration-300"
                    }`}
                  >
                    {e} <RightOutlined />
                  </button>
                );
              })}
            </div>
          </div>
          {aboutactive == "Shaxsiy malumotlar" && (
            <div className="w-[380px] h-[424px] bg-white rounded-xl p-[40px]">
              <div className="flex flex-col gap-5">
                <h1 className="text-[24px] font-bold">Shaxsiy malumotlar</h1>
                <p className="text-[16px] text-[#240E00CC] flex gap-2 items-end">
                  Ismi: <span className="text-[18px] font-bold">Ahmadboy</span>
                </p>
                <p className="text-[16px] text-[#240E00CC] flex gap-2 items-end">
                  Fafilyasi:{" "}
                  <span className="text-[18px] font-bold">Ben Bella</span>
                </p>
                <p className="text-[16px] text-[#240E00CC] flex gap-2 items-end">
                  Telfon raqami:{" "}
                  <span className="text-[18px] font-bold">
                    +998 99 300 30 30
                  </span>
                </p>
                <p className="text-[16px] text-[#240E00CC] flex gap-2 items-end">
                  Manzili{" "}
                  <span className="text-[18px] font-bold">
                    Surxandaryo.v/Denov.t/
                  </span>
                </p>
                <p className="text-[16px] text-[#240E00CC] flex gap-2 items-end">
                  Aniq manzil{" "}
                  <span className="text-[18px] font-bold">
                    Yoshlik-1.k/12-honodon
                  </span>
                </p>
              </div>
            </div>
          )}
          {aboutactive == "Yoqtirgan mahsulotlar" && (
            <div className="flex flex-wrap justify-around w-[70%] gap-2">
              {cardCount.map(e=>{
                return <Card key={e} />
              })}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
