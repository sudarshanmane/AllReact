import ProductConent from "../ProductContent/ProductConent";
import { Button, Dropdown, Skeleton, Spin, message } from "antd";
import "./jeweleryCategory.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJeweleryDetails } from "../../../Store/Actions/BaseActions";
import SkeletonpProdcuts from "../AllProduct/Skeleton";

export default function Jewelery() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJeweleryDetails({ payload: "payload" }));
  }, []);

  const result = useSelector((state) => state.result);
  const [res, setRes] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (result && result.result && result.result.result) {
      setRes(result.result.result);
      setShow(true);
    }
  }, [result]);
  return (
    <div className="all_products_content">
      <div className="selectCategoryOfTheProducts"></div>
      <div className="product_content_component">
        {show && res.length > 0 ? (
          <ProductConent products={result.result.result}></ProductConent>
        ) : (
          <>
            <SkeletonpProdcuts></SkeletonpProdcuts>;
          </>
        )}
      </div>
    </div>
  );
}
