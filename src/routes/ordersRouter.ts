import { Router } from 'express';

import * as controller from '../controllers/orders.controllers';

const router = Router();

router.get('/', controller.getOrders);

export default router;