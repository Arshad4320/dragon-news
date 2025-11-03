import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  console.log(item);
  return (
    <div className="space-y-4 p-6 bg-gray-100">
      <h2 className="text-xl font-semibold">Dragon News</h2>
      <div>
        <img
          className="w-full h-[360px] object-cover"
          src={item.thumbnail_url}
          alt=""
        />
      </div>
      <h4 className="text-xl font-semibold">{item.title}</h4>
      <p className="text-justify">{item.details}</p>
      <Link to={`/category/${item.category_id}`} className="btn btn-secondary">
        Back to category
      </Link>
    </div>
  );
};

export default CategoryCard;
