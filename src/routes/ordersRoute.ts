import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const ordersRouter = Router();

const oController = new OrdersController();

ordersRouter.get('/', oController.getAllOrders);

export default ordersRouter;
