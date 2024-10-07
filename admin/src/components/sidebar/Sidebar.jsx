import React from "react";
import { assets } from "../../assests/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-[18%] min-h-screen border-2 border-slate-400 border-t-0">
      <div className="sidebar-options pt-24 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `sidebar-option flex items-center gap-3 border-2 border-slate-400 border-r-0 py-2 px-3 rounded-tl-md rounded-bl-md cursor-pointer ${
              isActive ? "bg-red-400 text-[#444] border-none" : "bg-white"
            }`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:flex ">Add Item</p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `sidebar-option flex items-center gap-3 border-2 border-slate-400 border-r-0 py-2 px-3 rounded-tl-md rounded-bl-md cursor-pointer ${
              isActive ? "bg-red-400 text-[#444] border-none" : "bg-white"
            }`
          }
        >
          {" "}
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:flex">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `sidebar-option flex items-center gap-3 border-2 border-slate-400 border-r-0 py-2 px-3 rounded-tl-md rounded-bl-md cursor-pointer ${
              isActive ? "bg-red-400 text-[#444] border-none" : "bg-white"
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden  md:flex">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;