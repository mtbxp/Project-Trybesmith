// ./src/routes/orders.routes.ts

import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const router = Router();

const orderCont = new OrderController();

router.get('/', orderCont.getOrders);

export default router;
