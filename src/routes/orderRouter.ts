import { Router } from 'express';
import OrderController from '../controllers/orderController';

const router = Router();

const orderCont = new OrderController();

router.get('/', orderCont.getAllOrders);

export default router;