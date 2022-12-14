import { Router } from 'express';
import productRouter from './product.router';
import userRouter from './user.router';

const router = Router();

router.use(userRouter);
router.use(productRouter);

export default router;