import { Router } from 'express';

import * as productController from '../controllers/product.controller';

const router = Router();

router.post('/products', productController.create);