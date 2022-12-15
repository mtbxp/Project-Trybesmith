import { Router } from 'express';
import ordersController from '../controllers/controller.orders';

const router = Router();

router.get('/', ordersController.getAllOrders);

export default router;
