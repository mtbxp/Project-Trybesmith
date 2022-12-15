import { Router } from 'express';
import productRouter from './product.router';
import userRouter from './user.router';
import ordersRouter from './orders.routers';

const router = Router();

router.use(userRouter);
router.use(productRouter);
router.use(ordersRouter);

export default router;