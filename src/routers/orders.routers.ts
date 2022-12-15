import { Router } from 'express';
import * as OrderService from '../controllers/orders.controller';
import auth from '../middlewares/auth';
import validOrders from '../middlewares/validateOrders';

const ordersRouter = Router();

ordersRouter.get('/orders', OrderService.getAll);

ordersRouter.post('/orders', auth, validOrders, OrderService.create);

export default ordersRouter;