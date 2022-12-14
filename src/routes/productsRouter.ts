import { Router } from 'express';
import * as productsController from '../controllers/products.controller';

const productRouter = Router();

productRouter.post('/', productsController.createProduct);
productRouter.get('/', productsController.getAll);

export default productRouter;