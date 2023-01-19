import { Router } from 'express';

import productController from '../controllers/product.controller';

const router: Router = Router();

router.post('/', productController.create);

export default router;
