import { Router } from 'express';
import OrderController from '../controller/ordersController';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.allGetOrders);

export default router;