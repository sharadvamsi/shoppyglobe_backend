
import  express  from 'express';
import { getProductById, getProducts } from '../controllers/productController.js';
import { checkProductExists } from '../middlewares/product.js';

const productRouter = express.Router();

productRouter.get("/products",getProducts); //get all products api
productRouter.get("/product/:id",checkProductExists,getProductById); // added checkProductExists middleware so before returning product by id it first checks whether it exists or not.

export default productRouter;