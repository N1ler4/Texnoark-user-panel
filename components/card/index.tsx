import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./style.css"

function Page() {
  const [count, setCount] = useState(1);

  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://irshad.az/cdn-cgi/image/width=1400/storage/products/88291/iphone-15-pro-titanium.png"
        alt="Apple iPhone 13 Pro 8/128 GB Moviy"
      />
      <div className="product-details">
        <p className="product-title">Apple iPhone 13 Pro 8/128 GB Moviy</p>
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
        <h4 className="product-price">{count * 14_699_999} so‘m</h4>
        <div className="action-icons">
          <span className="action-icon">
            <DeleteOutlined className="icon" />
          </span>
          <span className="action-icon">
            <HeartOutlined className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page;
