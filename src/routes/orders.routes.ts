import { Router } from 'express';
import ordersController from '../controller/oders.controller';

const ordersRoute = Router();

ordersRoute.get('/', ordersController.getAllOrders);

export default ordersRoute;