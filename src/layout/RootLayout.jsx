import React from "react";
import Navbars from "../components/Navbars";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbars />
      <Outlet />
    </div>
  );
};

export default RootLayout;
