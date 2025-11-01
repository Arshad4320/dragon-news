import React from "react";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between py-3">
      <div></div>
      <div className="flex gap-2 text-lg text-gray-500">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-1">
        <img src={user} alt="" />
        <button className="bg-gray-700 text-white px-6 py-2 font-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
