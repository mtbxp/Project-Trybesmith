import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import productsIdsValidate from '../middleware/validateOrders';
import validateToken from '../middleware/validateToken';

const router = Router();

router.get('/', ordersController.getAll);

router.post('/', validateToken, productsIdsValidate, ordersController.create);

export default router;