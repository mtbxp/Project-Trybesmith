import { Router } from 'express';

import OrdersController from '../controllers/orders.controller';

const OrdersRouter = Router();

const ordersController = new OrdersController();

OrdersRouter.get('/', ordersController.getAllOrders.bind(ordersController));

export default OrdersRouter;