import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { productID, productName } = useParams();
  return (
    <div>
      this is the aboute page. and the product id is : {productID},{" "}
      {productName}
    </div>
  );
};

export default About;
