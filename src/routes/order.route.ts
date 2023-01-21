import { Router } from 'express';

import orderController from '../controllers/order.controller';
import authMiddleware from '../auth/validateJWT';
import validateOrderFields from '../middlewares/validateOrderField';

const router: Router = Router();

router.get('/', orderController.getAll);
router.post('/', authMiddleware, validateOrderFields, orderController.create);

export default router;
