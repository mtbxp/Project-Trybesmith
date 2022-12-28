import { Router } from 'express';
import * as orderController from '../controllers/orders.controller';

const router = Router();

router.get('/', orderController.default);

export default 
router;
