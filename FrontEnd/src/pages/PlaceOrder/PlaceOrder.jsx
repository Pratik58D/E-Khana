import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate;
  return (
    <>
      <form className="place-order flex items-start justify-between gap-14 mt-24">
        <div className="place-order-left w-full max-w-[max(30%,500px)]">
          <p className="title text-3xl font-semibold mb-14">
            Delivery Information
          </p>
          <div className="multifields flex gap-3 ">
            <input
              type="text"
              placeholder="First name"
              className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            required
          />
          <input
            type="text"
            placeholder="street"
            className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            required
          />
          <div className="multifields flex gap-3">
            <input
              type="text"
              placeholder="City"
              className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            />
            <input
              type="text"
              placeholder="State"
              className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            />
          </div>
          <div className="multifields flex gap-3">
            <input
              type="text"
              placeholder="Zip code"
              className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            />
            <input
              type="text"
              placeholder="Country"
              className="mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500"
            />
          </div>
          <input type="text" placeholder="phone" className='mb-4 w-full p-2 border-2 border-slate-300 rounded-sm outline-red-500'  />
        </div>
        {/* total card info or right side of order*/}
        <div className="w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className="font-semibold pb-12">Cart Totals:</h2>
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
            onClick={() => navigate("/order")}
            className="border-none text-white bg-red-500 w-[max(20vw,250px)] py-3 rounded-md cursor-pointer hover:bg-red-800"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
