import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategory(data);
    } else if (id == "1") {
      const filteredData = data.filter(
        (item) => item.others.is_today_pick === true
      );
      setCategory(filteredData);
    } else {
      const filteredData = data.filter((item) => item.category_id == id);
      setCategory(filteredData);
    }
  }, [id, data]);

  return <div>news {category.length} founds</div>;
};

export default CategoryNews;
