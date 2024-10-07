import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js"
import foodRouter from "./src/routes/foodroute.js";




//app config

const app = express();
const port = 4000

//middleware
app.use(express.json());
app.use(cors());


//db connection
connectDB();

//api endpoints

app.use("/api/food/",foodRouter);
app.use("/images",express.static("uploads"))


app.get("/",(req,res)=>{
    res.send("this is home page")
})

app.listen(port,()=>console.log(`serverStarted at ${port}.....`));