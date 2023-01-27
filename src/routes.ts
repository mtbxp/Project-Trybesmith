import { Router } from 'express';

import * as productsController from './controllers/products.controller';
import * as usersController from './controllers/users.controller';

const router = Router();

router.post('/products', productsController.addProduct);
router.get('/products', productsController.listAllProducts);
router.post('/users', usersController.addProduct);

export default router;