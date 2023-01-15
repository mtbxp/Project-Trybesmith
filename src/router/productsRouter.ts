import { Router } from 'express';
import productsController from '../controller/productsController';

const router = Router();

router.post('/', productsController.addProductController);
router.get('/', productsController.getProductController);

export default router;