import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import auth from '../middlewares/auth';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

router.post('/', auth, orderController.create);

export default router;