import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import userRouter from "./routes/userRoute.js";
import { authUser } from './middlewares/cart.js';

const app = express();
app.use(express.json());

//connecting to server
app.listen(1028,()=>{
    console.log("Server running on port 1028");
})

//connecting to database
mongoose.connect("mongodb://localhost:27017/shoppyglobe");

//checking db connection successfull or not
const db = mongoose.connection;

db.on("open",()=>{
    console.log("Connected to Db Successfully");
})

db.on("error",()=>{
    console.log("Db connection unsuccessfull");
})


//making routes for different parts of application and for evey product and cart routes /api/ should be common and for user routes /user/ is common.
app.use("/api/", productRouter);
app.use("/api/", authUser,cartRouter); // added authUser middleware which validates for every route in cartRouter only logged in user can access.
app.use("/user/", userRouter);