import foodModel from "../models/foodModel.js";

import fs from "fs";

//add food Item
const addFood = async (req, res) => {
  console.log(req.file); // Check if the file is being received

  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }
  let image_filename = req.file.filename;
  const { name, description, price, category } = req.body;

  const food = new foodModel({
    name,
    description,
    price,
    image: image_filename,
    category,
  });
  try {
    const response = await food.save();
    return res
      .status(200)
      .json({ sucess: true, message: "Food Added", data: response });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ sucess: false, message: "Error" });
  }
};

//list food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ sucess: true, data: foods });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ sucess: false, message: "Error" });
  }
};
//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ sucess: true, message: "food Removed" });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ sucess: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
