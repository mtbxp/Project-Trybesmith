import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRoute = Router();
const ordersController = new OrdersController();

ordersRoute.get('/', ordersController.getAll);

export default ordersRoute;