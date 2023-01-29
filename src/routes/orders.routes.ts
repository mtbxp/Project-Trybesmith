import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateOrders from '../middlewares/validateOrders.middlewares';
import validateToken from '../middlewares/validatetoken.middlewares';

const router: Router = Router();

router.get('/', ordersController.getAll);
router.post('/', validateToken, validateOrders, ordersController.create);

export default router;