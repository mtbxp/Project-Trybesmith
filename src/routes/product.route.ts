import { Router } from 'express';

import ProductController from '../controllers/product.controller';

const productRouter = Router();

const productsController = new ProductController();

productRouter.post('/', productsController.createProducts.bind(productsController));
productRouter.get('/', productsController.getProductAll.bind(productsController));

export default productRouter;