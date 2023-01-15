import { Router } from 'express';
import * as ordersController from '../controller/orders.controller';

const orderRouter = Router();

orderRouter.get('/', ordersController.default);

export default orderRouter;