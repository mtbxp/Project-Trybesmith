import { Router } from 'express';
import orderController from '../controllers/order.controller';

const routerOrders = Router();

routerOrders.get('/', orderController.getAllOrders);

export default routerOrders;