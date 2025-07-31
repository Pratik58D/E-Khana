import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartitems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  //for fetching food from back end
  const [food_list, setFooodlist] = useState([]);

  //Adding to cart
  // const addToCart = async (itemId) => {
    
  //   if (!cartItems[itemId]) {
  //     setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
  //   } else {
  //     setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   }

  //   if (token) {
  //     await axios.post(
  //       url + "/api/cart/add",
  //       { itemId },
  //       { headers: { token } }
  //     );
  //   }
  // };
  
  const addToCart = async (itemId) => {
    // Update the cartItems state
    if (!cartItems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  
    // Send the request to the backend if token exists
    if (token) {
      try {
        await axios.post(
          url + "/api/cart/add",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Failed to add item to the cart:", error);
      }
    }
  };
  


  //Removing from cart

  const removeFromCart = async (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
   
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  //loading the food items

  const fetchfoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      setFooodlist(response.data.data);
    } catch (err) {
      console.log("error on fetching food list",err);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.get(
        url + "/api/cart/get",
        { headers: { token } }
      );
      console.log(response.data);
      setCartitems(response.data.cartData);
    } catch (err) {
      console.error("Failed to load cart data:", err);
    }
  };
  

  //when hard reload page should not be reloded
  useEffect(() => {
    const storedToken = localStorage.getItem("token");    
    async function loadData() {
      await fetchfoodList();
      if (storedToken) {
        setToken(storedToken);
        loadCartData(storedToken)
       
      }
    }

    loadData();
  }, []);

  //tocheck card items only
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartitems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
