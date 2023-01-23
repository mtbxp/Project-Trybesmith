import { Router } from 'express';
import * as ordersController from '../controller/ordersController';

const router = Router();
router.get('/', ordersController.getAllOrders);

export default router;