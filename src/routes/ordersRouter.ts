import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const router = Router();

// router.post('/', usersController.add);

router.get('/', ordersController.getAll);

export default router;