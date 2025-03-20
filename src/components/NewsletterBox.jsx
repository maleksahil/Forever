import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/">
          <img src={assets.logo} className="w-20" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="hover:text-red-500 transition">
            HOME
          </NavLink>
          <NavLink to="/collection" className="hover:text-red-500 transition">
            COLLECTION
          </NavLink>
          <NavLink to="/about" className="hover:text-red-500 transition">
            ABOUT
          </NavLink>
          <NavLink to="/contact" className="hover:text-red-500 transition">
            CONTACT
          </NavLink>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="Search"
          />
          <Link to="/login">
            <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
          </Link>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
