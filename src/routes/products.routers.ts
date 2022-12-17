import { Router } from 'express';

import * as productsController from '../controllers/products.controller';

const productRoutes = Router();

productRoutes.post('/', productsController.insertProducts);
productRoutes.get('/', productsController.getAllProducts);

export default productRoutes;