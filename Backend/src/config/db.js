import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://pratikdevkota58:9848286721@cluster0.2yigr.mongodb.net/food-delivery"
    );
    console.log(`database connected : ${conn.connection.host}`);
  } catch (err) {
    console.log("dataBase connection error", err);
  }
};

export default connectDB;
