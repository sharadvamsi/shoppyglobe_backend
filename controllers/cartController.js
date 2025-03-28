import { cartModel } from "../models/cartModel.js";

//adding new item to cart upon post request.
export const addToCart = async(req,res)=>{
    const {name,price} = req.product;
    const{productId,quantity} = req.body;
    const addItem = await cartModel.create({
        userId: req.userId,
        productName:name,
        pricePerQuantity:price,
        productId,quantity,
    })
    addItem.save();
    res.status(201).json(addItem);

}

//updating quantity of a item upon put request
export const updateQuantity = async(req,res) =>{
    const userId = req.userId;
    const {quantity,productId} = req.body;
    const updateData = await cartModel.findOneAndUpdate(
        {userId,productId},
        {$set:{
            quantity
        }},
        {new:true} // returns updated document
    );
    return res.status(200).json(updateData);
}

//removing product from cart upon delete request
export const removeProduct = async(req,res) =>{
    const userId = req.userId;
    const productId = req.params.id;
    const updateData = await cartModel.deleteOne({ userId, productId });
    return updateData.deletedCount === 1 ? res.status(200).json({message:"Product removed from the cart"}) : res.status(500).json({message:"Internal server error"})
}

