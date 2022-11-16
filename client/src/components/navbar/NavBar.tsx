import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../AuthProvider/AuthContext";
const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "" : "text-gray-600";

const NavBar = () => {
  const { user } = useAuthContext();
  return (
    <nav className="flex gap-4 ml-auto items-center text-xl">
      <NavLink to={"/"} end className={getNavLinkClass}>
        Home
      </NavLink>
      {!!user && (
        <>
          <NavLink to={"/about"} className={getNavLinkClass}>
            About
          </NavLink>
          <p className="text-red-700">Logout</p>
        </>
      )}
      {!user && (
        <>
          <NavLink to={"/signin"} className={getNavLinkClass}>
            Sign In
          </NavLink>
          <NavLink to={"/signup"} className={getNavLinkClass}>
            Sign Up
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;
