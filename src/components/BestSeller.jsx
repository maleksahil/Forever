import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });

    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-14 px-4">
      {/* Section Title */}
      <div className="text-center text-3xl py-8" data-aos="fade-up">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-full sm:w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our top-selling products loved by our customers. Shop the best picks today!
        </p>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8"
        data-aos="fade-up"
      >
        {bestseller.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <Productitem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
