import { Router } from 'express';

import * as productsController from './controllers/products.controller';

const router = Router();

router.post('/products', productsController.addProduct);

export default router;