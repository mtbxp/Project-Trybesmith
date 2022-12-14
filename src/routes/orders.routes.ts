import { Router } from 'express';
import orderControllers from '../controllers/order.controllers';

const ordersRouter = Router();

ordersRouter.get('/', orderControllers.getAllOrders);

export default ordersRouter;