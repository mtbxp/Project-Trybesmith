import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import validateOrder from '../middleware/orderValidation';
import validateToken from '../middleware/tokenValidation';

const router = Router();

const ordersController = new OrdersController();

router.get('/orders', ordersController.getAll);
router.post('/orders', validateToken, validateOrder, ordersController.create);

export default router;