import ProductConent from "../ProductContent/ProductConent";
import { Button, Dropdown, Skeleton, Spin, message } from "antd";
import "./jeweleryCategory.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJeweleryDetails } from "../../../Store/Actions/BaseActions";

export default function Jewelery() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJeweleryDetails({ payload: "payload" }));
  }, []);

  const [res, setRes] = useState([]);

  const result = useSelector((state) => state.result);
  result && console.log(result.result.result);

  return (
    <div className="all_products_content">
      <div className="selectCategoryOfTheProducts"></div>
      <div className="product_content_component">
        {result ? (
          <ProductConent products={result.result.result}></ProductConent>
        ) : (
          <>
            <Skeleton active className="content_spin_loader" />
            <Skeleton active className="content_spin_loader" />
            <Skeleton active className="content_spin_loader" />
          </>
        )}
      </div>
    </div>
  );
}
