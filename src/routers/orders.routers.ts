import { Router } from 'express';
import * as OrderService from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/orders', OrderService.getAll);

export default ordersRouter;