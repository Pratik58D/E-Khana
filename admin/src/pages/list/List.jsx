import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.data) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching data");
    }
  };
//function to handle food deletion

const handleDelete = async(id)=>{
  try{
    const response  = await axios.delete(`${url}/api/food/remove`,{data:{id}});
    if(response.data.sucess){
      toast.success("food item deleted sucessfully");
      //update list by filtering out the deletd item
      // setList(list.filter((item)=> item._id !== id));
      //or
      await fetchlist()
    }else{
      toast.error("error deleting Food item");
    }
  }
  catch(err){
    console.log(err);
    toast.error("Error deleting food Item");
  }
};




  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="list flex flex-col w-[80%] mx-auto mt-8 text-gray-800">
      <p className="text-2xl font-bold mb-4 text-center">All Foods List</p>
      <div className="list-table bg-white shadow-md rounded-lg overflow-hidden">
        {/* Table header */}
        <div className="list-table-format title bg-gray-100 p-4 grid grid-cols-5 text-left font-semibold text-lg">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {/* Table rows */}
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="list-table-format grid grid-cols-5 items-center p-4 border-b border-gray-200"
            >
              <img
                src={`${url}/images/` + item.image}
                alt="product image"
                className="w-16 h-16 object-cover rounded-md"
              />
              <p className="text-lg">{item.name}</p>
              <p className="text-lg">{item.category}</p>
              <p className="text-lg">NPR. {item.price}</p>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                // Pass the food item ID to the delete handler
                onClick={() => {
                  handleDelete(item._id)
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="text-center p-4">No data available</div>
        )}
      </div>
    </div>
  );
};

export default List;
