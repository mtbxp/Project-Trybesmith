import { Router } from 'express';

import productController from '../controllers/product.controller';
import validateProductsFields from '../middlewares/validateProductsField';

const router: Router = Router();

router.post('/', validateProductsFields, productController.create);
router.get('/', productController.getAll);

export default router;
