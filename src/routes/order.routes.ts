import { Router } from 'express';
import { createOrder, getAllOrders } from '../controllers/order.controller';
import validation from '../middlewares/order.validation';

const router = Router();

router.get('/', getAllOrders);
router.post('/', validation, createOrder);

export default router;