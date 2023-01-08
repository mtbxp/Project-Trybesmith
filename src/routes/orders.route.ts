import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAllOrders);

export default ordersRouter;