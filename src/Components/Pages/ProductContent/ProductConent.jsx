import React from "react";
import "./product_components.scss";

export default function ProductConent({ products }) {
  return (
    <div className="prodcut_content_component">
      {products.map((ele) => {
        const { id, title, image, description } = ele;
        return (
          <div className="product_components" key={id}>
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <div>{title}</div>
              <div>{`${description.slice(0, 20)}...`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
