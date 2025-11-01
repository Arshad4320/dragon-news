import React from "react";
import Marquee from "react-fast-marquee";

const LatestLayout = () => {
  return (
    <div className="flex gap-4 items-center bg-gray-100 p-4 w-11/12 mx-auto">
      <p className="btn btn-secondary">Latest</p>
      <Marquee className="flex gap-2" speed={80} pauseOnHover={true}>
        <p className="font-medium text-xl ">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-medium text-xl ">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-medium text-xl ">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestLayout;
