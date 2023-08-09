import { Pagination } from "antd";
import React from "react";
import { Link, Navigate } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      This is the contact page
      <Link to={"/aboute/1/Cloths"}>Click Me</Link>
    </div>
  );
};

export default ContactPage;
