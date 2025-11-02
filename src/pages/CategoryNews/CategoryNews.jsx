import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const filteredData = data.filter((item) => item.category_id == id);
    console.log(filteredData);
  }, [id, data]);
  console.log(data, id);
  return <div>this is category page</div>;
};

export default CategoryNews;
