import React, { use } from "react";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const data = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold text-xl">All Categories {data.length}</h2>
    </div>
  );
};

export default Categories;
