import { Router } from 'express';
import * as ordersController from '../controllers/ordersController';

const routerOrd = Router();

routerOrd.get('/', ordersController.getAllOrdersC);

export default routerOrd;