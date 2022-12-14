import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.add);

router.get('/', productsController.getAll);

export default router;