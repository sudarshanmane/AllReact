import React, { useEffect } from "react";
import Navbar from "../Pages/Navbar/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { App, Button, Dropdown, message } from "antd";
import "./appLayout.scss";
import { useDispatch } from "react-redux";
import { AppConstants } from "../../Globals/AppConstants";

export default function AppLayout() {
  const items = [
    {
      key: 1,
      label: <NavLink to={"/home/content"}>All Products</NavLink>,
    },
    {
      key: AppConstants.JEWELRY,
      label: <NavLink to={"/home/jewelery"}>Jewelery</NavLink>,
    },
    {
      key: "2",
      label: <a>menuProps</a>,
    },
    {
      key: "3",
      label: <a>menuProps</a>,
    },
  ];

  const handleMenuClick = (e) => {
    const category = e.key;
    if (category === AppConstants.JEWELRY) {
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="app_layout_content">
      <Navbar></Navbar>
      <Dropdown
        className="selectCategoryOfTheProducts"
        menu={menuProps}
        placement="bottomLeft"
      >
        <Button type="primary"> Category</Button>
      </Dropdown>
      <Outlet></Outlet>
    </div>
  );
}
