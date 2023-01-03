import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', productsController.insertProduct);

export default productsRouter;