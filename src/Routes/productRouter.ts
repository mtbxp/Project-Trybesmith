import { Router } from 'express';
import productController from '../controller/productController';

const productRouter = Router();

productRouter.post('/', productController.registerProduct);

productRouter.get('/', productController.getAllProducts);

export default productRouter;