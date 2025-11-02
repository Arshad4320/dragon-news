import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindSocial = () => {
  return (
    <div className="flex flex-col py-8 ">
      <h3 className="text-xl mb-2 font-semibold">Find Us On</h3>
      <button className="justify-start btn w-full text-lg p-6">
        <FaFacebookF className="text-blue-500" size={20} />
        Facebook
      </button>
      <button className="justify-start btn w-full text-lg p-6">
        {" "}
        <FaTwitter className="text-blue-500" size={20} />
        Twitter
      </button>
      <button className="justify-start btn w-full text-lg p-6">
        <FaInstagram size={20} className="text-rose-500" /> Instagram
      </button>
    </div>
  );
};

export default FindSocial;
