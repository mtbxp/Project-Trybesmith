import { Router } from 'express';
import * as productsController from '../controllers/products.controller';
import { validateNewProduct } from '../middlewares/validations';

const productRouter = Router();

productRouter.post('/', validateNewProduct, productsController.createProduct);
productRouter.get('/', productsController.getAll);

export default productRouter;