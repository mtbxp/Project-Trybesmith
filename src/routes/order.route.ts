import { Router } from 'express';
import orderController from '../controllers/order.coontroller';

const router = Router();

router.get('/', orderController.getAll);

export default router;