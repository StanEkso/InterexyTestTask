import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
