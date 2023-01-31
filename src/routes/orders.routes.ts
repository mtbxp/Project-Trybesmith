import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import { IdProductsValidate, TokenValidate } from '../middlewares/validate.products';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post(
  '/',
  TokenValidate,
  IdProductsValidate,
  ordersController.create,
);

export default router;