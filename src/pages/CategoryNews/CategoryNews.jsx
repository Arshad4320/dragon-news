import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategory(data);
      return;
    } else if (id == "1") {
      const filteredData = data.filter(
        (item) => item.others.is_today_pick == true
      );
      setCategory(filteredData);
    } else {
      const filteredData = data.filter((item) => item.category_id == id);
      setCategory(filteredData);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-medium text-xl">
        news <span className="text-secondary">{category.length}</span> founds
      </h2>
      <div>
        {category.map((item) => (
          <NewsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
