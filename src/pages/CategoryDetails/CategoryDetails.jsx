import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Header";
import CategoryCard from "../../components/CategoryCard";
import RightSideAside from "../../components/homeLayout/RightSideAside";

const CategoryDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [item, setItem] = useState({});

  useEffect(() => {
    const filteredData = data.find((category) => category.id == id);
    setItem(filteredData);
  }, [id, data]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto gap-8">
        <section className="col-span-9">
          {" "}
          <CategoryCard item={item} />
        </section>
        <aside className="col-span-3">
          <RightSideAside />
        </aside>
      </main>
    </div>
  );
};

export default CategoryDetails;
