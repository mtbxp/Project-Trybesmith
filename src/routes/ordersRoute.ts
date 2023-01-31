import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';
import validateProductsIds from '../middlewares/validateProductsIds';

const router = Router();

router.get('/orders', ordersController.getOrders);
router.post('/orders', validateToken, validateProductsIds, ordersController.createOrder);

export default router;