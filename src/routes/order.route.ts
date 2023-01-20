import { Router } from 'express';

import orderController from '../controllers/order.controller';

const router: Router = Router();

router.get('/', orderController.getAll);

export default router;
