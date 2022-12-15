import { Router } from 'express';

import * as orderController from '../controllers/order.controller';

import verifyToken from '../middlewares/tokenVerification';

const router = Router();

router.get('/', orderController.getAll);
router.post('/', verifyToken, orderController.create);

export default router;