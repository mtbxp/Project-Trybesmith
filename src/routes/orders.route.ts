import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const orderRouter = Router();

const ordersController = new OrdersController();

orderRouter.get('/', ordersController.getAll);

export default orderRouter;
