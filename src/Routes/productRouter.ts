import { Router } from 'express';
import productController from '../controller/productController';
import productValidation from '../middlewares/productsValidation';

const productRouter = Router();

productRouter.post('/', productValidation, productController.registerProduct);

productRouter.get('/', productController.getAllProducts);

// productRouter.get('/', productValidation, productController.getAllProducts);

export default productRouter;