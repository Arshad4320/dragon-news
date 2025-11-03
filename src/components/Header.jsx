import React, { use } from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center py-10 flex-col items-center">
      <div>
        {user}
        <img src={logo} alt="" />
        <p className="text-xl text-center">Journalism Without Fear or Favour</p>
        <p className="text-xl font-medium text-center">
          {format(new Date(), "EEEE, MMM dd, yy")}
        </p>
      </div>
    </div>
  );
};

export default Header;
