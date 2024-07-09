"use client";
import Container from "@/components/container/page";
import { RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Card from "@/components/products/page";
import useLikeStore from "@/store/like";
import { getId } from "@/helpers/auth-helpers";
import useAuthStore from "@/store/auth";


export default function page() {
  const [data, setData] = useState<any>([]);
  const [admin, setAdmin] = useState<any>([]);
  const [aboutactive, setAboutActive] = useState(
    localStorage.getItem("aboutus") || "Shaxsiy malumotlar"
  );
  const { getLike } = useLikeStore();
  const { getAdmin } = useAuthStore();

  const id = getId();

  const getSingleData = async () => {
    const res = await getAdmin(id);
    if (res && res.status === 200) {
      setAdmin(res.data.data);
    }
  };


  const arr = [
    "Shaxsiy malumotlar",
    "Yoqtirgan mahsulotlar",
    "Xaridlar tarixi",
    "To’lovlar tarixi",
  ];
  const cardCount = [];
  for (let i = 1; i < 10; i++) {
    cardCount.push(i);
  }

  const getLikedProducts = async () => {
    try {
      const res = await getLike(id);
      console.log(res);
      if (res && res.status === 200) {
        setData(res?.data?.data?.likes);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLikedProducts();
    getSingleData();
  }, []);

  return (
    <>
      <Container>
        <div className="flex gap-3 mt-5">
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Bosh sahifa
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E00CC] bg-[#FFFFFF] grid justify-center items-center">
            Account
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
                  Ismi:{" "}
                  <span className="text-[18px] font-bold">
                    {admin.first_name}
                  </span>
                </p>
                <p className="text-[16px] text-[#240E00CC] flex gap-2 items-end">
                  Fafilyasi:{" "}
                  <span className="text-[18px] font-bold">
                    {admin.last_name}
                  </span>
                </p>
                <p className="text-[16px] text-[#240E00CC] flex gap-2 items-end">
                  Telfon raqami:{" "}
                  <span className="text-[18px] font-bold">
                    {admin.phone_number}
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
            <div className="flex flex-wrap w-[70%] gap-2 ">
              {data.length ? (
                data?.map((e: any, i: any) => {
                  const product = e.product_id;
                  return (
                    <Card
                      key={i}
                      img={product?.images[0]}
                      name={product.name}
                      cost={product.price}
                      id={product.id}
                    />
                  );
                })
              ) : (
                <div className="text-center">You have not any liked products</div>
              )}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
