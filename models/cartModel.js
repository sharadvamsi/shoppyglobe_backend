import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId:String,
    productName:String,
    productId:String,
    quantity: Number,
    pricePerQuantity:Number,
})

export const cartModel = mongoose.model("Cart",cartSchema);