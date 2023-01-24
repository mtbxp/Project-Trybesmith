import { Router } from 'express';
import OrderController from '../controllers/orderController';
import validateToken from '../middlewares/tokenValidation';
import validateOrder from '../middlewares/orderValidation';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getAll);
router.post('/orders', validateToken, validateOrder, orderController.create);

export default router;
