import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const router = Router();

router.post('/', productsController.insertProductC);
router.get('/', productsController.getAllProductC);

export default router;