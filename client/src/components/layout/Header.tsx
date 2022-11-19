import React from "react";
import NavBar from "../navbar/NavBar";

const Header = () => {
  return (
    <header className="border-b-2 w-full sticky top-0 z-10 bg-white">
      <div className="mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 py-2 flex gap-1">
        <h1 className="font-bold text-2xl">Rick & Mortys</h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
