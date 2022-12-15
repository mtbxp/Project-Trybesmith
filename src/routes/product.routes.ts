import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const productRouter = Router();

const productsController = new ProductController();

productRouter.get('/', productsController.getAllProducts.bind(productsController));
productRouter.post('/', productsController.insertProduct.bind(productsController));

export default productRouter;