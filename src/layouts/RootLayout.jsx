import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const RootLayout = () => {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
