import React, { useContext } from "react";
import "./fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, setCartitems, addToCart, removeFromCart ,url} =
    useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-2xl shadow-2xl duration-100 ">
      <div className="relative">
        <img
          className="w-full h-72 object-cover  rounded-t-2xl "
          src={`${url}/images/${image}`}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="w-8 absolute bottom-4 right-4 rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-full bg-white">
            <img
              className="w-8"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} className="w-20"  alt="" />
        </div>
        <p className="text-[#608a89] text-[12px] pb-2">{description}</p>
        <p className="text-red-400 font-medium text-[22px] my-3">NPR.{price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
