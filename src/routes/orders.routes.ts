import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const router: Router = Router();

router.get('/', ordersController.getAll);

export default router;