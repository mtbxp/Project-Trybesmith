import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import validateProducts from '../middlewares/productsMiddleware';

const router = Router();

router.post('/', validateProducts, productsController.insert);
router.get('/', productsController.getAll);

export default router;