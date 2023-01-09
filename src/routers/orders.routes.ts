import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersController = new OrdersController();
const router = Router();

router.get('/orders', ordersController.findAll);

export default router;
