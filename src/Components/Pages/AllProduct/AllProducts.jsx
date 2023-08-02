import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductConent from "../ProductContent/ProductConent";
import { getAllProductDetailsAction } from "../../../Store/Actions/BaseActions";
import "./allProduct.scss";

import { Button, Dropdown, Skeleton, Spin, message } from "antd";

export default function AllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductDetailsAction({ payload: "payload" }));
  }, []);

  const result = useSelector((state) => state.result);
  const [res, setRes] = useState([]);

  useEffect(() => {
    result && setRes(result.result.result);
  }, [result]);

  return (
    <div className="all_products_content">
      <div className="selectCategoryOfTheProducts"></div>
      <div className="product_content_component">
        {result ? (
          <ProductConent products={res}></ProductConent>
        ) : (
          <>
            <Skeleton active className="content_spin_loader" />
            <Skeleton active className="content_spin_loader" />
            <Skeleton active className="content_spin_loader" />
          </>
        )}
        s
      </div>
    </div>
  );
}
