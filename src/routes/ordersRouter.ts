import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const router = Router();

router.get('/orders', ordersController.getAllOrders);

export default router;