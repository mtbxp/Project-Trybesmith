import { Router } from 'express';
import ordersController from '../controller/oders.controller';
import auth from '../middlewares/auth.middleware';
import validateNewOrder from '../middlewares/order.middleware';

const ordersRoute = Router();

ordersRoute.get('/', ordersController.getAllOrders);
ordersRoute.post('/', auth, validateNewOrder, ordersController.createOrder);

export default ordersRoute;