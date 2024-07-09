"use client";
import Container from "../../components/container/page";
import Card from "@/components/card";
import Swiper from "@/components/swiper/page";
import Link from "next/link";
import useCartStore from "@/store/cart";
import { getId } from "@/helpers/auth-helpers";
import { useEffect, useState } from "react";


export default function page() {
  const [data, setData] = useState<any>([]);
  console.log(data)
  const [totalSum, setTotalSum] = useState(0);


  const { getCart } = useCartStore();

  const product_id = getId();

  const getData = async () => {
    const res = await getCart(product_id);
    if (res && res.status === 200) {
      setData(res.data.data.carts);
      console.log(res);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const sum = data.reduce((acc:any, item:any) => acc+ + item.product_id.price, 0);
    setTotalSum(sum);
  }, [data]);


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
              {data.length ? (
                data.map((e: any, i: any) => (
                  <div key={i}>
                    <Card
                      name={e.product_id.name}
                      price={e.product_id.price}
                      img={e.product_id.images[0]}
                      likeId={e.product_id.id}
                      id={e.id}
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <div className="w-[440px] h-[278px] p-[40px] bg-white rounded-xl">
              <h4 className="font-bold text-[24px] mb-[17px] ">
                Sizni haridlaringiz
              </h4>
              <p className="#240E00CC text-[16px]">
                Mahsulotlar:{" "}
                <span className="text-[18px] font-bold mb-[10px] ">
                  {data.length} ta
                </span>
              </p>
              <p className="#240E00CC text-[16px]">
                Jami summa:{" "}
                <span className="text-[28px] font-bold ">{totalSum} so‘m</span>
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
