import { Router } from 'express';

import * as productController from '../controllers/productController';
import { validateProduct } from '../middlewares/validateBody';

const router = Router();

router.get('/', productController.getAll);

router.use(validateProduct);
router.post('/', productController.create);

export default router;