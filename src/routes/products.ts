import { Router } from 'express';
import ProductController from '../controller/products.controller';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/', productController.registerProduct.bind(productController));
productsRouter.get('/', productController.getAllProducts.bind(productController));

export default productsRouter;