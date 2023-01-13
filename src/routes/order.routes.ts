import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const { getOrders } = new OrderController();

const orderRouter = Router();

orderRouter.get('/', getOrders);

export default orderRouter;
