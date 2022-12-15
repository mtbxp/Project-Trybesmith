import { Router } from 'express';
import OrdersController from '../controller/orders.controller';

const route = Router();
const ordersController = new OrdersController();

route.get('/', ordersController.getOrders.bind(ordersController));

export default route;