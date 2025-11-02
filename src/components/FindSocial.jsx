import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindSocial = () => {
  return (
    <div className="flex flex-col items-center ">
      <button className="flex items-center btn w-full text-lg">
        <FaFacebookF className="text-blue-500" size={20} />
        Facebook
      </button>
      <button className="flex items-center btn w-full text-lg">
        {" "}
        <FaTwitter className="text-blue-500" size={20} />
        Twitter
      </button>
      <button className="flex items-center btn w-full text-xl">
        <FaInstagram size={20} /> Instagram
      </button>
    </div>
  );
};

export default FindSocial;
