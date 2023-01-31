import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProducts from '../middlewares/products.validations';

const productsRouter = Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', validateProducts, productsController.createProduct);

export default productsRouter;
