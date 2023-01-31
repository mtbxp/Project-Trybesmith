import { Router } from 'express';
import OrderController from '../controller/ordersController';

import validatedJwt from '../authe/validateJwt';
import validateOrders from '../middlewares/validateOrder';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.allGetOrders);
router.post('/', validatedJwt, validateOrders, orderController.createOrder);
export default router;