import { Router } from 'express';
import findOrders from '../controllers/orders.controller';

const orderRouter = Router();

orderRouter.get('/', findOrders);

export default orderRouter;