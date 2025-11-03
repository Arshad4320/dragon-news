import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <header className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
        <Navbar />
      </header>

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
