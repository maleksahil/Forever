import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-14 px-4">
      {/* Section Title */}
      <div className="text-center py-8 text-3xl" data-aos="fade-up">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-full sm:w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our newest arrivals featuring trendy styles and premium quality. Don't miss out on the latest fashion!
        </p>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8"
        data-aos="fade-up"
      >
        {latestProducts.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <Productitem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
