import { Router } from 'express';
import * as ordersController from '../controllers/ordersController';
import validateOrders from '../middlewares/ordersMiddleware';

const router = Router();

router.get('/', ordersController.getAll);
router.post('/', validateOrders, ordersController.insert);

export default router;