import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import { validateToken } from '../middlewares/jwtToken';
import { validateProductsIds } from '../middlewares/ordersValidations';

const router = Router();

router.get('/orders', ordersController.getAllOrders);
router.post('/orders', validateToken, validateProductsIds, ordersController.createOrder);

export default router;