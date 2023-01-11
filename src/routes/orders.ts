import { Router } from 'express';
import orderController from '../controller/order.controller';

const ordersRouter = Router();

ordersRouter.get('/', orderController.listAllOrders);

export default ordersRouter;