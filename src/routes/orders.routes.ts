import { Router } from 'express';
import ordersController from '../controllers/orders.controllers';

const routers = Router();

routers.get('/', ordersController.getAll);

export default routers;