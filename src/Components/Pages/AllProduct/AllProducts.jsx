import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductConent from "../ProductContent/ProductConent";
import { getAllProductDetailsAction } from "../../../Store/Actions/BaseActions";
import "./allProduct.scss";
import SkeletonpProdcuts from "./Skeleton";

export default function AllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductDetailsAction({ payload: "payload" }));
  }, []);

  const result = useSelector((state) => state.result);
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (result && result.result && result.result.result) {
      setRes(result.result.result);
    }
  }, [result]);

  return (
    <div className="all_products_content">
      <div className="product_content_component">
        {res.length > 0 ? (
          <ProductConent products={res}></ProductConent>
        ) : (
          <>
            <SkeletonpProdcuts></SkeletonpProdcuts>;
          </>
        )}
      </div>
    </div>
  );
}
