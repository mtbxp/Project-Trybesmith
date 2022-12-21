import { Router } from 'express';
import { getAllOrders } from '../controllers/orderController';
import { getAll } from '../controllers/productsController';
import validateOrder from '../midlleware/validateOrder';
import verifyToken from '../midlleware/validateToken';

const orderRouter = Router();

orderRouter.get('/', getAllOrders);
orderRouter.post('/', verifyToken, validateOrder.validateOrder, getAll);

export default orderRouter;