import React from "react";
import "./exploremenu.css";
import { menu_list } from "../../assets/assets";

const Exploremenu = ({category,setCateogry}) => {
  return (
    <div className="explore-menu flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[#222121] font-semibold text-2xl">Explore Our Menu</h1>
      <p className="explore-menu-text max-w-[70%] text-[#608a89]">
        Hungry? We've got the perfect solution. Order your favorite dishes from
        top-rated restaurants and enjoy fresh, hot meals brought directly to
        your door, hassle-free.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-x-scroll ">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCateogry(prev=>prev ===item.menu_name ? "All": item.menu_name)}
             key={index} className="explore-menu-item">
              <img src={item.menu_image} alt=""
               className={`${category === item.menu_name ? "border-4 border-red-500 p-0.5" : ""} w-32 h-32  min-w-32 rounded-full object-cover cursor-pointer transition duration-200`}/>
              <p className="mt-3  text-[#444444] text-1xl cursor-pointer ">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr  className="my-1 h-1 bg-slate-300 border-none "/>
    </div>
  );
};

export default Exploremenu;
