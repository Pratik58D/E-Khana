import  { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import LogIn from "./components/login/LogIn";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EsewaIntegration from "./pages/esewaIntegration/EsewaIntegration";


const App = () => {
  const [showlogin,setShowLogin] = useState(false);
  return (
    <>
    <div>
      <ToastContainer/>
    </div>
    {
      showlogin ? <LogIn  setShowLogin ={setShowLogin}/> : <> </> 
    }
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/esewa" element={<EsewaIntegration />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
