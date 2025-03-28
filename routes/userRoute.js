import express from "express"
import { createNewUser, login } from "../controllers/userController.js";
import { loginValidation, registerValidation } from "../middlewares/user.js";

const userRouter = express.Router();

userRouter.post("/register",registerValidation, createNewUser);//added registerValidation middleware to validate input data.
userRouter.post("/login",loginValidation, login);// added loginValidation middleware to validate input data.

export default userRouter;