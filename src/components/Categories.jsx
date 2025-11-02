import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const data = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold text-xl">All Categories {data.length}</h2>
      <div className="grid grid-cols-1 gap-2 border-0 mt-4">
        {data.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={({ isActive }) => {
              `hover:bg-base-100 btn ${isActive && "bg-base-300"}`;
            }}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
