import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateToken from '../auth/validateJwt';
import validateOrder from '../middlewares/validateOrder';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAllOrders);
router.post('/', validateToken, validateOrder, orderController.createOrder);

export default router;