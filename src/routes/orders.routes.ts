import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';
import validateOrder from '../middlewares/validateOrder';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', validateToken, validateOrder, orderController.create);

export default router;