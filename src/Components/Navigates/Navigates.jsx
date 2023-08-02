import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProduct/AllProducts";
import Jewelery from "../Pages/Jewelery/JeweleryCategory";
import UnControlledForm from "../Pages/Form/UnControlledForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../Login/Login";

function Navigates() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/home/content"}></Navigate>}
        ></Route>
        <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
          <Route path="content" element={<AllProducts></AllProducts>} />
          <Route path="jewelery" element={<Jewelery></Jewelery>} />
          <Route
            path="unControlledForm"
            element={<UnControlledForm></UnControlledForm>}
          ></Route>
        </Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigates;
