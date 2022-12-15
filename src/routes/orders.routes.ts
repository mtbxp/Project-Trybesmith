import { Router } from 'express';
import { validateToken } from '../auth/jsonWebToken';
import orderControllers from '../controllers/order.controllers';
import validationOrder from '../middlewares/validation.Order';

const ordersRouter = Router();

ordersRouter.get('/', orderControllers.getAllOrders);
ordersRouter.post('/', validateToken, validationOrder, orderControllers.addOrder);

export default ordersRouter;