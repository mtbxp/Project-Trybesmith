import { Router } from 'express';

import * as orderController from '../controllers/orderController';
import validateToken from '../middlewares/validateToken';
import validate from '../middlewares/validateProductsIds';

const router = Router();

router.get('/', orderController.getAll);

router.use(validateToken);
router.use(validate);
router.post('/', orderController.create);

export default router;