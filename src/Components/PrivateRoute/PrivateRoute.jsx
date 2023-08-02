import React from "react";
import { getUser } from "../../Utils/SessionStorage";
import { Navigate } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";

export default function PrivateRoute() {
  const auth = getUser();
  return auth ? <AppLayout></AppLayout> : <Navigate to={"/login"}></Navigate>;
}
