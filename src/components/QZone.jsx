import React from "react";
import img1 from "../assets/swimming.png";
import img2 from "../assets/class.png";
import img3 from "../assets/playground.png";
import img4 from "../assets/bg.png";
const QZone = () => {
  return (
    <div className="bg-base-200 p-2">
      <h2 className="text-xl font-semibold">Q Zone</h2>
      <div className="flex flex-col justify-center gap-3">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default QZone;
