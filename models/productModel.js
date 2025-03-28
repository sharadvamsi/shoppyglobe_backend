import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    stockQuantity:Number,
})

export const productModel = mongoose.model("Product",productSchema);

