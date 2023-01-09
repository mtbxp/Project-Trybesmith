import { Router } from 'express';
import ProductController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.getProductAll.bind(productController));

export default productRouter;
