import { userModel } from "../models/userModel.js";

export const registerValidation = async(req,res,next)=>{
    const {name,email,password} = req.body;

    if(!name) return res.status(400).json({"message":"name is required"});
    if(!email) return res.status(400).json({"message":"email is required"});
    if(!password) return res.status(400).json({"message":"password is required"});

    const checkEmailExists = await userModel.findOne({email});
    if(checkEmailExists) return res.status(400).json({ message: "email already exists" });
    next();
}


export const loginValidation = async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email) return res.status(400).json({"message":"email is required"});
    if(!password) return res.status(400).json({"message":"password is required"});

    const checkEmailExists = await userModel.findOne({email});
    if(!checkEmailExists) return res.status(404).json({ message: "user doesn't exists. please register" });
    req.user = checkEmailExists;
    next();
}