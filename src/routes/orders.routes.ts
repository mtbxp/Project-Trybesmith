import { Router } from 'express';
import ordersController from '../controllers/order.controller';

const routers = Router();

routers.get('/', ordersController.getAllOrdersController);

export default routers;
