import express from 'express';
import ordersController from '../controllers/orders.controller';
import orderValidations from '../middlewares/orderValidations';
import userValidations from '../middlewares/userValidations';

const router = express.Router();

router.get('/', ordersController.getOrders);

router.post(
  '/', 
  userValidations.validateToken, 
  orderValidations.validateOrder,
  ordersController.createOrder,
);

export default router;