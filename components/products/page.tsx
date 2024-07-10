import {
  ShoppingCartOutlined,
  BarChartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./style.css";
import useLikeStore from "@/store/like";
import Link from "next/link";
import useCartStore from "@/store/cart";
import useProductStore from "@/store/products/page";
import { getId } from "@/helpers/auth-helpers";

interface PageProps {
  img: string;
  name: string;
  cost: number;
  id: string;
  clicked: () => void;
}

const Page: React.FC<PageProps> = ({ img, name, cost, id, clicked }) => {
  const [data, setData] = useState<any>([]);
  const [liked, setLiked] = useState<string[]>([]);
  const { postLike, getLike } = useLikeStore();
  const { postCart } = useCartStore();
  const { getProduct } = useProductStore();

  const postData = {
    product_id: id,
  };

  const postCartData = {
    product_id: id,
  };

  const userid = getId();

  const getLikedProduct = async () => {
    const res = await getLike(userid);
    if (res && res.status === 200) {
      const likedProductIds = res.data.data.likes.map(
        (e: any) => e.product_id.id
      );
      setLiked(likedProductIds);
    }
  };

  const getData = async () => {
    const res = await getProduct("", 10, 1);
    if (res && res.status === 200) {
      setData(res.data.data.products);
    }
  };

  useEffect(() => {
    getData();
    getLikedProduct();
  }, []);

  const isLiked = liked.includes(id);

  const handleLike = async () => {
    await postLike(postData);
    clicked();
  };

  return (
    <div className="max-w-[305px] w-full h-[490px] pt-[50px] pb-[36px] px-[30px] py-5 bg-white rounded-xl ">
      <Link href={`/product/${id}`}>
        <div className="max-w-[180px] w-full max-h-[200px] h-full mx-auto">
          <Image
            src={img}
            alt="IMG"
            className="max-h-[200px] h-full duration-200 hover:scale-110 object-cover"
            width={180}
            height={180}
          />
        </div>
      </Link>
      <p className="mt-[36px] text-[16px] mb-[16px]">{name}</p>
      <h4 className="font-bold text-[18px] ">{cost} som</h4>
      <p className="text-[#1EB91E] mt-[11px] mb-[19px] bg-[#1EB91E14] inline-block py-2 px-4 rounded-lg">
        {Math.ceil(cost / 12)} so’mdan/12 oy
      </p>
      <div className="flex items-center justify-between gap-[10px] flex-wrap">
        <Button className="btn_product" onClick={() => postCart(postCartData)}>
          Savat <ShoppingCartOutlined />
        </Button>
        <Badge>
          <Avatar
            shape="square"
            size="large"
            className={`cursor-pointer items-center justify-center grid ${
              isLiked ? "bg-red-700" : ""
            }`}
            onClick={handleLike}
          >
            <HeartOutlined className="text-[20px] text-[white]" />
          </Avatar>
        </Badge>
        <Badge>
          <Avatar
            shape="square"
            size="large"
            className="bg-[#F0F0F0] cursor-pointer items-center justify-center grid"
          >
            <BarChartOutlined className="text-[20px] text-[black]" />
          </Avatar>
        </Badge>
      </div>
    </div>
  );
};

export default Page;
