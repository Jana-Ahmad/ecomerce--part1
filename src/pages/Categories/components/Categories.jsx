import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader/Loader";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/categories/active?limit=10`
      );
      setCategories(data.categories);
      setLoader(false);
    } catch (error) {
      console.log("catch error");
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  if (loader) {
    return <Loader/>;
  }
  return (
    <>
      <h2>Categories</h2>
      <div className="row">
        {categories.map((category) => (
          <div className="category cols-lg-4" key={category._id}>
            <img src={category.image.secure_url} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
