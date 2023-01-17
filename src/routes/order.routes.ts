import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import OrderMiddleware from '../middlewares/order.middleware';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getAll);
router.post(
  '/orders', 
  OrderMiddleware.validateToken, 
  OrderMiddleware.validateproductsIds, 
  orderController.create,
);

export default router;
