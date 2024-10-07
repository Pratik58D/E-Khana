import React, { useEffect, useState } from "react";
import { assets } from "../../assests/assets";
import axios from "axios";
import { toast } from "react-toastify";


const Add = () => {
  const url = "http://localhost:4000";
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });


  useEffect(() => {
    console.log(data);
  }, [data]);


  const onChangeHandler = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    // console.log(data)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    //it is useful when sending files like image
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)

    const response = await axios.post(`${url}/api/food/add`,
      formData
    )
    console.log(response);
    if (response.data.sucess){
      setData({
        name: "",
        description: "",
        price: "",
        category: "salad",
      });
      setImage(false)
      toast.success(response.data.message)

    }
    else{
      toast.error(response.data.message);
    }
   };


  return (
    <div className="add w-[70%] ml-[max(5vw,25px)] mt-12 text-[#1a1717] text-2xl">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Image Upload Section */}
        <div className="add-img-upload flex flex-col gap-3">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
              className="w-32"
            />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              console.log(URL.createObjectURL(e.target.files[0]));
            }}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* Product Name Section */}
        <div className="add-product-name flex flex-col gap-3 w-[max(40%,280px)]">
          <p>Product name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Enter the product name"
            className="p-2 placeholder:italic placeholder:text-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Product Description Section */}
        <div className="add-product-description flex flex-col gap-3 w-[max(40%,280px)]">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            onChange={onChangeHandler}
            value={data.description}
            placeholder="Write product description"
            className="p-2 placeholder:italic placeholder:text-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        {/* Category & Price Section */}
        <div className="add-category-price flex gap-8">
          <div className="add-category flex flex-col gap-3">
            <p>Product category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              className="p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 optional:text-lg"
            >
              <option value="salad">salad</option>
              <option value="momo">Momo</option>
              <option value="dal-bhat">Dal Bhat</option>
              <option value="chatpate">Chatpate</option>
              <option value="sandwich">Sandwich</option>
              <option value="pure-veg">Pure Veg</option>
              <option value="cake">Cake</option>
              <option value="noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex flex-col gap-3">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="100"
              onChange={onChangeHandler}
              value={data.price}
              className="p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder:italic placeholder:text-lg"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="add-button p-3 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-blue-800 w-52 pointer-cursor"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
