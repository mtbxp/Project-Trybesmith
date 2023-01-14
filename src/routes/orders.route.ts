import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const orderRouter = Router();

orderRouter.get('/', ordersController.getAllOrders);

export default orderRouter;