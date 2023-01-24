import { Router } from 'express';
import OrderController from '../controllers/Order.Controller';
import auth from '../middlewares/authValidation';
import validOrder from '../middlewares/Order.Validation';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', auth, validOrder, orderController.createOrder);

export default router;