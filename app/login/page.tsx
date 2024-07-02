import React from "react";
import Container from "../../components/container/page";
import { Button, Input } from "antd";
import Link from "next/link";

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
          <div className="w-[500px] h-[474px] bg-white mt-10 mb-10 flex flex-col justify-around items-center px-[50px] py-[60px]">
            <h1 className="text-[34px] font-black">Kirish</h1>
            <label htmlFor="input" className="w-full">
              <h3 className="text-[13px] font-normal">Telfon raqam</h3>
              <Input
                className="h-[60px] w-full"
                style={{ background: "#F0F0F0" }}
                placeholder="+998"
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
                Kirish
              </Button>
              <Link href={"/signup"} className="w-full">
                <Button
                  className="h-[50px] w-full"
                  style={{
                    background: "#F0F0F0",
                    border: "#F0F0F0",
                    color: "#240E00CC",
                  }}
                >
                  Ro’yhatdan o’tish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
