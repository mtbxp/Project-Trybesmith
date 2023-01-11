import { Router } from 'express';
import controller from '../controllers/orders.controller';

const router = Router();

router.get('/', controller.getAllOrders);

export default router;