import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import validateToken from '../middlewares/validateToken';
import validateOrder from '../middlewares/validateOrder';

const routers = Router();

routers.get('/', ordersController.getAllOrders);
routers.post('/', validateToken, validateOrder, ordersController.addOrder);

export default routers;