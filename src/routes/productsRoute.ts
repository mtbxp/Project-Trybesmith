import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProduct from '../middleware/productValidation';

const productRouter = Router();

productRouter.get('/', productsController.getAllProducts);
productRouter.post('/', validateProduct, productsController.registerProduct);

export default productRouter;
