import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const router = Router();

router.post('/', productsController.insert);
router.get('/', productsController.getAll);

export default router;