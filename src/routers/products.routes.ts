import { Router } from 'express';
import productsControllers from '../controllers/productsControllers';

const router = Router();

router.get('/', productsControllers.getAll);
router.post('/', productsControllers.productModel);

export default router;