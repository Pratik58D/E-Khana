import mongoose, { mongo } from "mongoose";
import  "dotenv";
import 'dotenv/config';

const mongourl = process.env.MONGODBURL

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongourl);
    console.log(`database connected : ${conn.connection.host}`);
  } catch (err) {
    console.log("dataBase connection error", err);
  }
};

export default connectDB;
