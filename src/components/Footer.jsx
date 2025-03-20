import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets/assets";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <footer className=" text-gray-700 py-14 px-6">
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 text-sm"
        data-aos="fade-up"
      >
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="text-gray-600 leading-relaxed max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            It has been the industry's standard dummy text since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-4">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-red-500 cursor-pointer transition">Home</li>
            <li className="hover:text-red-500 cursor-pointer transition">About Us</li>
            <li className="hover:text-red-500 cursor-pointer transition">Delivery</li>
            <li className="hover:text-red-500 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-red-500 cursor-pointer transition">+1-212-456-7890</li>
            <li className="hover:text-red-500 cursor-pointer transition">contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10">
        <hr className="border-gray-300" />
        <p className="py-4 text-center text-sm">© 2024 ForeverYou.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
