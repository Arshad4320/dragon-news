import React, { use } from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/user.png";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignout = () => {
    console.log("usr logout");
    logOut()
      .then((data) => {
        toast.success("user logout successfully");
      })
      .catch((err) => {
        console.log(err.errorMessage);
        toast.err(err.errorMessage);
      });
  };
  return (
    <div className="w-11/12 mx-auto flex justify-between py-3 items-center">
      <div></div>
      <div className="flex gap-2 text-lg text-gray-500">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-1">
        {user?.photoURL ? (
          <img className="w-13 h-13 rounded-full" src={user?.photoURL} />
        ) : (
          <img src={userImg} alt="" />
        )}
        {user ? (
          <button
            onClick={handleSignout}
            className="bg-gray-700 text-white px-6 py-2 font-bold"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="bg-gray-700 text-white px-6 py-2 font-bold">
              Login
            </button>{" "}
          </Link>
        )}{" "}
      </div>
    </div>
  );
};

export default Navbar;
