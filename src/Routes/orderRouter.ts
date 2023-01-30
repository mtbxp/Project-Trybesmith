import { Router } from 'express';
import { validateToken } from '../auth/jwt';
import orderController from '../controller/orderController';
import pIdsValidation from '../middlewares/orderValidation';

const orderRouter = Router();

orderRouter.get('/', orderController.getAllOrders);

orderRouter.post('/', validateToken, pIdsValidation, orderController.createOrder);

export default orderRouter;
