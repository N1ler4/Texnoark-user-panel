import {
  ShoppingCartOutlined,
  BarChartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import Image from "next/image";
import React from "react";
import "./style.css";
import useLikeStore from "@/store/like";
import Link from "next/link";
import useCartStore from "@/store/cart";

function page({ img, name, cost, id }: any) {
  const { postLike } = useLikeStore();
  const { postCart } = useCartStore();

  const postData = {
    product_id: id,
  };
  const postCartData = {
    product_id: id,
  }

  return (
    <div className="w-[305px] h-[490px] pt-[50px] pb-[36px] px-[30px] bg-white rounded-xl ">
      <Link href={`/product/${id}`}>
        <div className="w-[150px] h-[160px] mx-auto">
          <Image
            src={img}
            alt="IMG"
            className="max-h-[180px] duration-200 hover:scale-110  overline-hidden object-cover"
            width={150}
            height={100}
          />
        </div>
      </Link>
      <p className="mt-[36px] text-[16px] mb-[16px]">{name}</p>
      <h4 className="font-bold text-[18px] ">{cost} so'm</h4>
      <p className="text-[#1EB91E] mt-[11px] mb-[19px] bg-[#1EB91E14] inline-block py-2 px-4 rounded-lg">
        {Math.ceil(cost / 12)} so’mdan/12 oy
      </p>
      <div className="flex items-center justify-between gap-[10px]">
        <Button className="btn_product"
        onClick={()=> postCart(postCartData)}>
          Savat <ShoppingCartOutlined />
        </Button>
        <Badge>
          <Avatar
            shape="square"
            size="large"
            className="bg-[#F0F0F0] cursor-pointer"
            onClick={() => postLike(postData)}
          >
            <HeartOutlined className="text-[20px] text-[black]" />
          </Avatar>
        </Badge>
        <Badge>
          <Avatar
            shape="square"
            size="large"
            className="bg-[#F0F0F0] cursor-pointer"
          >
            <BarChartOutlined className="text-[20px] text-[black]" />
          </Avatar>
        </Badge>
      </div>
    </div>
  );
}

export default page;
