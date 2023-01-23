import { Router } from 'express';
import ordersController from '../controller/ordersController';

const router = Router();
router.get('/', ordersController.getAllOrders);

export default router;