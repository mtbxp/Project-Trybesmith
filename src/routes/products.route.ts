import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productRouter = Router();

const productsController = new ProductsController();

productRouter.get('/', productsController.getAll);
productRouter.post('/', productsController.create);

export default productRouter;
