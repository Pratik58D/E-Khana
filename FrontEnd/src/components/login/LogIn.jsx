import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./login.css";

const LogIn = ({ setShowLogin }) => {
  const [currentState, setCurrentstate] = useState("Login");

  return (
    <div className="login absolute z-20 w-full h-full bg-[#00000090] grid">
      <form className="login-form place-self-center  text-[#808080] bg-white flex flex-col gap-6 py-6 px-7  rounded-lg text-2xl ">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className="font-semibold text-2xl">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
        </div>

        <div className="input  flex flex-col gap-6">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-blue-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-2 focus:border-blue-500 hover:border-blue-500 shadow-sm focus:shadow"
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-blue-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-2 focus:border-blue-500 hover:border-blue-500 shadow-sm focus:shadow"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-blue-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-2 focus:border-blue-500 hover:border-blue-500 shadow-sm focus:shadow"
            required
          />
        </div>
        <button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-800 capitalize">
          {currentState === "Sign up" ? "create account" : "Login"}
        </button>
        <div className="login-popup-conndition flex gap-3 text-[1rem] items-center">
          <input  className="cursor-pointer" type="checkbox" required />
          <p>By continuing , I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p className="text-[#474646] text-[1.2rem] font-medium">
            Create a new account?{" "}
            <span
              onClick={() => setCurrentstate("Sign up")}
              className="bg-green-600 text-white py-2 px-6 rounded-md ml-3 cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-[#474646] text-[1.2rem] font-medium">
            Already have an account ?{" "}
            <span
              onClick={() => setCurrentstate("Login")}
              className="bg-green-600 text-white py-2 px-6 rounded-md ml-3 cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogIn;
