import { Router } from 'express';
import orderController from '../controller/orderController';

const orderRouter = Router();

orderRouter.get('/', orderController.getAllOrders);

export default orderRouter;
