import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../fooditem/fooditem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-8" id="food-display">
      <h2 className="text-2xl font-semibold">Lets eat Together.</h2>
      <div className="grid  grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-8 gap-x-20 ">
        {food_list.map((item, index) => {
          if(category === "All" || category === item.category){
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
            
          }
     
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
