import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "../PlaceOrder/PlaceOrder";

const Cart = () => {
  const { food_list, cartItems,getTotalCartAmount, removeFromCart ,url} =
    useContext(StoreContext);
    const navigate = useNavigate()

  return (
    <div className="cart mt-24">
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[#444] text-2xl font-semibold pb-4">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quality</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="h-0.5 bg-slate-200 border-none" />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="my-2 grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[#131111] text-[1.2rem] py-2">
                  <img className="w-14 rounded-md" src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>NPR.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer hover:scale-150 hover:-translate-y-1"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="h-0.5 bg-slate-200 border-none" />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-80 flex flex-col md:flex-row justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#444]">
              <p>Subtotal</p>
              <p>NPR {getTotalCartAmount()}</p>
            </div>
            <hr className="h-0.5 bg-slate-200 border-none my-2" />
            <div className="cart-total-details flex justify-between text-[#444]">
              <p>Delivery Fee</p>
              
              <p>NPR {getTotalCartAmount()===0 ? 0 : 10}</p>
            </div>
            <hr className="h-0.5 bg-slate-200 border-none my-2" />
            <div className="cart-total-details flex justify-between text-[#444]">
              <b>Total:</b>
              <b>NPR {getTotalCartAmount() + 10}</b>
            </div>
          </div>
          <button 
          onClick={()=>navigate("/order")}
          className="border-none text-white bg-red-500 w-[max(20vw,250px)] py-3 rounded-md cursor-pointer hover:bg-red-800">
            PROCEED TO CHECKOUT
          </button>
        </div>
        {/* card promocode */}
        <div className="cart-promocode flex-1">
          <div>
            <p>If you have a promo code, enter it here.</p>
            <div className="cart-promocode-input mt-2 flex justify-between items-center bg-slate-100 rounded-md">
              <input
                className="bg-transparent border-none outline-none pl-3 py-2"
                type="text"
                placeholder="promo code"
              />
              <button className="w-[max(10vw,150px)] py-3 px-2 bg-purple-600 rounded-md text-white hover:bg-purple-900">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
