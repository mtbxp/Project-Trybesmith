import { Router } from 'express';
import OrderController from '../controllers/Order.Controller';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

export default router;