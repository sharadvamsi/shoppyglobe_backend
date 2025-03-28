import { productModel } from "../models/productModel.js";

export const checkProductExists = async(req,res,next)=>{
    const productId = req.params.id || req.body.productId;
    const data = await productModel.findById(productId);
    if(!data) return res.status(404).json({message:`No Product found with provided id ${productId}`})
    req.product = data
    next();
}