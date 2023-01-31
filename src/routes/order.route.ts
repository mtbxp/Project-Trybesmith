import { Router } from 'express';
import ordersController from '../controllers/order.controller';
import validateToken from '../middlewares/token.valid';
import validateOrder from '../middlewares/order.valid';

const routers = Router();

routers.get('/', ordersController.getAllOrders);
routers.post('/', validateToken, validateOrder, ordersController.newOrder);

export default routers;