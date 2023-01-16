import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProduct from '../middlewares/productValidate';

const productRouter = Router();

productRouter.get('/', productsController.getAllProducts);
productRouter.post('/', validateProduct, productsController.addNewProduct);

export default productRouter;