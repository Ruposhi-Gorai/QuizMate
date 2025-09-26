import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ContextAPI from "./ContextAPI";

export default function () {
  return (
    <>
      <ContextAPI>
        <Header />
        <Outlet />
        <Footer />
      </ContextAPI>
    </>
  );
}
