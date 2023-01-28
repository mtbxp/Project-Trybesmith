import { Router } from 'express';
import { validateToken } from '../auth/jwt';
import orderController from '../controller/orderController';
import productValidation from '../middlewares/productsValidation';

const orderRouter = Router();

orderRouter.get('/', orderController.getAllOrders);

orderRouter.post('/', validateToken, productValidation, orderController.createOrder);

export default orderRouter;
