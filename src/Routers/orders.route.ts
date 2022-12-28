import { Router } from 'express';
// import * as orderController from '../controllers/orders.controller';
import orderController from '../controllers/orders.controller';

const router = Router();

router.get('/', orderController);

export default 
router;
