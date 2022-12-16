import { Router } from 'express';
import { validateToken } from '../auth/jwtValidations';
import * as ordersController from '../controllers/orders.controller';
import { validateNewOrder } from '../middlewares/validations';

const orderRouter = Router();

orderRouter.get('/', ordersController.findOrders);
orderRouter.post('/', validateToken, validateNewOrder, ordersController.addOrder);

export default orderRouter;