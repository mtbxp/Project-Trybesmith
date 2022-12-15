import { Router } from 'express';
import productController from '../controllers/product.controller';

const router: Router = Router();

router.post('/', productController.createProduct);

router.get('/', productController.getAll);

export default router;