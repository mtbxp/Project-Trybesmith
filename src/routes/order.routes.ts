import { Router } from 'express';

import * as orderController from '../controllers/order.controller';

const router = Router();

router.get('/', orderController.getAll);

export default router;