import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-6 py-20 px-6 text-xs sm:text-sm md:text-base text-gray-700 bg-gray-50">
      {/** Policy Item 1 */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-full shadow-md transition-transform transform hover:scale-105">
          <img src={assets.exchange_icon} className="w-10" alt="Exchange Policy" />
        </div>
        <p className="font-semibold mt-4">Easy Exchange Policy</p>
        <p className="text-gray-500">We offer hassle-free exchanges</p>
      </div>

      {/** Policy Item 2 */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="200">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-full shadow-md transition-transform transform hover:scale-105">
          <img src={assets.quality_icon} className="w-10" alt="Return Policy" />
        </div>
        <p className="font-semibold mt-4">7 Days Return Policy</p>
        <p className="text-gray-500">We provide 7-day free returns</p>
      </div>

      {/** Policy Item 3 */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="300">
        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-full shadow-md transition-transform transform hover:scale-105">
          <img src={assets.support_img} className="w-10" alt="Customer Support" />
        </div>
        <p className="font-semibold mt-4">24/7 Customer Support</p>
        <p className="text-gray-500">We're here to help anytime</p>
      </div>
    </div>
  );
};

export default OurPolicy;
