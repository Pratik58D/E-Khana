import React from "react";
import { assets } from "../../assests/assets";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center py-4 px-[4%]">
      <div className="flex flex-col">
        <img className="w-20" src={assets.ekhana} alt="" />
        <h3 className="text-slate-700 italic pt-1 ">Admin panel</h3>
      </div>
      <img className="w-10 rounded-full" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;