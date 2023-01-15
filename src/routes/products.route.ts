import { Router } from 'express';
import * as productController from '../controller/products.controller';

const productRouter = Router();

productRouter.post('/', productController.addNewProduct);
productRouter.get('/', productController.showAllProducts);

export default productRouter;