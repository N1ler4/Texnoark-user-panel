import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./style.css";
import useLikeStore from "@/store/like";
import { Avatar } from "antd";
import useCartStore from "@/store/cart";

function Page({ img, name, price, likeId, id }: any) {
  const [count, setCount] = useState(1);
  const { postLike } = useLikeStore();
  const { deleteCart } = useCartStore();

  const postLikeData = {
    product_id: likeId,
  };


  return (
    <div className="product-card">
      <img className="product-image" src={img} alt={name} />
      <div className="flex flex-col max-w-[400px] w-full">
        <p className="product-title">{name}</p>
        <div className="quantity-controls">
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 1}
            className="quantity-btn"
          >
            -
          </button>
          <p className="quantity">{count}</p>
          <button onClick={() => setCount(count + 1)} className="quantity-btn">
            +
          </button>
        </div>
      </div>
      <div className="product-actions">
        <h4 className="product-price">{count * price} so‘m</h4>
        <div className="action-icons">
          <Avatar
            shape="square"
            size="large"
            className="bg-[#F0F0F0] cursor-pointer"
            onClick={() => deleteCart(id)}
          >
            <DeleteOutlined className="text-[20px] text-[black]" />
          </Avatar>
          <Avatar
            shape="square"
            size="large"
            className="bg-[#F0F0F0] cursor-pointer"
            onClick={() => postLike(postLikeData)}
          >
            <HeartOutlined className="text-[20px] text-[black]" />
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Page;
