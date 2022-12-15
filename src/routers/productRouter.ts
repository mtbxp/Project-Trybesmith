import express from 'express';
import ProductController from '../controllers/productController';
import Middleware from '../middlewares';
import { productSchema } from '../middlewares/joi';

const productsRouter = express.Router();

const productController = new ProductController();
const middleware = new Middleware(productSchema); 

productsRouter.post('/', middleware.validatefields, productController.create);

productsRouter.get('/', productController.getAll);

export default productsRouter;