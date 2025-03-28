import { userModel } from "../models/userModel.js";
import jwt from "jsonwebtoken"

export const createNewUser = async(req,res)=>{
    const{name,email,password} = req.body;
    const newUser = await userModel.create({
        name,email,password
    })
    newUser.save();

    res.status(201).json(newUser);
}

export const login = async(req,res)=>{
    //checking if password provided matches with password in db if no returning error.
    if(!(req.user.password === req.body.password)) return res.status(400).json({message:"Invalid credentials"});

    //if yes creating jwt token and sending it as response.
    const token = jwt.sign(req.body,"secret",{expiresIn:"50m"});

    res.status(200).json({token});
    
}