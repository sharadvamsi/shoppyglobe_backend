import { addToCart, removeProduct, updateQuantity } from "../controllers/cartController.js";
import  express  from 'express';
import { checkProductExists } from '../middlewares/product.js';
import { removeProductValidation, updateQuantityValidation } from "../middlewares/cart.js";

const cartRouter = express.Router();

//for all rutes after authUSer validation added another middleware which validates input data required for that route.
cartRouter.post("/cart",checkProductExists,addToCart);
cartRouter.put("/cart",updateQuantityValidation, updateQuantity);
cartRouter.delete("/cart/:id",removeProductValidation,removeProduct)

export default cartRouter;