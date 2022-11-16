import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="border-b-2 w-full">
        <div className="mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 py-2">
          <h1 className="font-bold text-2xl">Rick & Mortys</h1>
        </div>
      </header>
      <main className="mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
