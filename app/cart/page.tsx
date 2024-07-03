"use client";
import Container from "../../components/container/page";
import Card from "@/components/card";
import Swiper from "@/components/swiper/page";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Bosh sahifa
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Savat
            </span>
          </p>
        </Container>
      </div>

      <div className="mt-[51px]">
        <Container>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="w-[440px] h-[278px] p-[40px] bg-white rounded-xl">
              <h4 className="font-bold text-[24px] mb-[17px] ">
                Sizni haridlaringiz
              </h4>
              <p className="#240E00CC text-[16px]">
                Mahsulotlar:{" "}
                <span className="text-[18px] font-bold mb-[10px] ">6 ta</span>
              </p>
              <p className="#240E00CC text-[16px]">
                Jami summa:{" "}
                <span className="text-[28px] font-bold ">56 778 678 so‘m</span>
              </p>
              <Link href={"/clearance"}>
                <button className="w-[360px] bg-[#D55200] text-white rounded-md font-medium h-[54px]  mt-[24px]">
                  Xaridni rasmiylashtirish
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-[60px]">
        <Container>
          <h1 className="font-bold text-[32px] mb-[24px] max-sm:text-[20px]">
            Aksiyadagi mahsulotlar
          </h1>
          <Swiper />
        </Container>
      </div>
    </>
  );
}
