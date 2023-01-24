import { Router } from 'express';
import ordersController from '../controller/ordersController';
import validateProductsIds from '../middlewares/validateProductsIds';
import validateToken from '../middlewares/validateToken';

const router = Router();
router.get('/', ordersController.getAllOrders);
router.post('/', validateToken, validateProductsIds, ordersController.newOrderAndUptade);
export default router;