import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', productsController.createProduct);

export default productsRouter;
