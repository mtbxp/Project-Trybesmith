import { Router } from 'express';

import productsController from '../controllers/products.controller';

const productRouter = Router();

productRouter.get('/', productsController.getProducts);
productRouter.post('/', productsController.insertProduct);

export default productRouter;
