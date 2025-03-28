import { productModel } from "../models/productModel.js"

export const getProducts = async(req,res)=>{
    const data = await productModel.find({});
    res.status(200).json(data);
}

export const getProductById = async(req,res)=>{
    res.status(200).json(req.product);// productDetails attached to req as product in middleware only if it exists.
}