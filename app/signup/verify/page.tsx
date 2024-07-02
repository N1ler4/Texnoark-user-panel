import React from "react";
import Container from "../../../components/container/page";
import { Button, Input } from "antd";

export default function index() {
  return (
    <>
      <Container>
        <div className="flex gap-3 mt-5">
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Bosh sahifa
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Smartfonlar
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E00CC] bg-[#FFFFFF] grid justify-center items-center">
            Kirish
          </div>  
        </div>
      </Container>
      <Container>
        <div className="grid justify-center items-center">
          <div className="w-[500px] h-[575px] bg-white mt-10 mb-10 flex flex-col justify-around items-center px-[50px] py-[60px]">
            <h1 className="text-[34px] font-black">Ro‘hatdan o‘tish</h1>
            <label htmlFor="input" className="w-full">
              <h3 className="text-[13px] font-normal">Telfon raqam</h3>
              <Input
                className="h-[60px] w-full"
                style={{ background: "#F0F0F0" }}
                placeholder="+998"
              />
            </label>
            <label htmlFor="input" className="w-full">
              <h3 className="text-[13px] font-normal">Ism/Familya</h3>
              <Input
                className="h-[60px] w-full"
                style={{ background: "#F0F0F0" }}
              />
            </label>
            <div className="flex flex-col gap-5 w-full">
              <Button
                className="h-[50px]"
                style={{
                  background: "#D55200",
                  border: "#D55200",
                  color: "#FFFFFF",
                }}
              >
                Ro’yhatdan o’tish
              </Button>
              <Button
                className="h-[50px]"
                style={{
                  background: "#F0F0F0",
                  border: "#F0F0F0",
                  color: "#240E00CC",
                }}
              >
                Kirish
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
