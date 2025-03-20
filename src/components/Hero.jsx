import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 bg-gray-50">
      {/* Hero Left Side */}
      <div
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6"
        data-aos="fade-right"
      >
        <div className="text-[#414141] text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center justify-center sm:justify-start gap-2 group cursor-pointer">
            <p className="font-semibold text-sm md:text-base transition-all duration-300 group-hover:underline">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] transition-all duration-300 group-hover:w-14"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="Hero"
        data-aos="fade-left"
      />
    </div>
  );
};

export default Hero;
