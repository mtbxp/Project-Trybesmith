import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateOrders from '../middlewares/orders.validations';
import validateToken from '../middlewares/token.validations';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAllOrders);
ordersRouter.post('/', validateToken, validateOrders, ordersController.createOrder);

export default ordersRouter;
