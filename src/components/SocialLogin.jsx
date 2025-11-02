import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl ">Login With</h2>
      <button className="btn btn-outline btn-secondary w-full my-3 text-lg">
        <FcGoogle size={28} />
        Login with google
      </button>
      <button className="btn btn-outline btn-primary w-full text-lg">
        <FaGithub size={28} />
        Login with github
      </button>
    </div>
  );
};

export default SocialLogin;
