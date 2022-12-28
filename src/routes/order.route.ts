import { Router } from 'express';

import OrdersController from '../controllers/order.controller';

const OrderRouter = Router();

const orderController = new OrdersController();

OrderRouter.get('/', orderController.getOrderAll.bind(orderController));

export default OrderRouter;