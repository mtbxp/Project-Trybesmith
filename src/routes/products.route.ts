import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productRouter = Router();

productRouter.get('/', productsController.getAllProducts);
productRouter.post('/', productsController.addNewProduct);

export default productRouter;