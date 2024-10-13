import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);


    // State to control profile dropdown visibility
    const [showDropdown, setShowDropdown] = useState(false);

    // Function to toggle dropdown on click
    const handleProfileClick = () => {
      setShowDropdown(!showDropdown);
    };

    const navigate = useNavigate();

    const logOut = ()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
  



  return (
    <div className="py-5 px-4 sm:px-6 lg:px-8 flex justify-between items-center bg-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-24 sm:w-28 md:w-32 lg:w-36"
        />
      </Link>

      {/* Menu */}
      <ul className="hidden md:flex list-none md:gap-3 lg:flex lg:gap-10 text-[#444444] text-[14px] sm:text-[16px]  lg:text-[18px] ">
        <li
          onClick={() => setmenu("home")}
          className={`cursor-pointer ${
            menu === "home" ? "border-b-2 border-[#49577e] pb-1" : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={`cursor-pointer ${
            menu === "menu" ? "border-b-2 border-[#49577e] pb-1" : ""
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("mobile app")}
          className={`cursor-pointer ${
            menu === "mobile app" ? "border-b-2 border-[#49577e] pb-1" : ""
          }`}
        >
          Mobile App
        </li>
        <li
          onClick={() => setmenu("contact-us")}
          className={`cursor-pointer ${
            menu === "contact-us" ? "border-b-2 border-[#49577e] pb-1" : ""
          }`}
        >
          Contact Us
        </li>
      </ul>

      {/* Right side of Navbar */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="w-6 md:w-8"
        />
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="Basket Icon"
              className="w-6 md:w-8"
            />
          </Link>
          {/* creating dot */}
          {/* Dot showing if there's an item in the cart */}
          {getTotalCartAmount() > 0 && (
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"></div>
          )}
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="hidden md:block bg-transparent text-[14px] sm:text-[16px] text-[#444444] border-2 border-red-400 py-2 px-4 sm:py-3 sm:px-6 rounded-lg cursor-pointer duration-300 hover:bg-slate-200"
          >
            Sign In
          </button>
        ) : (
          <div
          onClick={handleProfileClick} // Toggle dropdown on click
          className="navbar-profile relative group">
            <img src={assets.profile_icon} alt="" />  
              {/* Dropdown will be shown either on hover or click */}
            <ul
             className={`nav-profile-dropdown absolute right-0  mt-2 w-52 bg-white border border-gray-200 shadow-lg rounded-lg p-4 ${showDropdown ? "flex" : "hidden"} group-hover:flex flex-col gap-3 z-10`}>
              <li className="flex items-center gap-2 cursor-pointer">
                <img src={assets.bag_icon} alt="Orders" className="w-7 h-7" />
                <p className="hover:text-red-400">Orders</p>
              </li>
              <hr />
              <li
              onClick={logOut}
              className="flex items-center gap-2 cursor-pointer">
                <img
                  src={assets.logout_icon}
                  alt="Logout"
                  className="w-7 h-7"
                />
                <p className="hover:text-red-400">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <button className="text-[#444444] text-2xl">
          <i className="fa fa-bars"></i> {/* Add icon for mobile menu */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
