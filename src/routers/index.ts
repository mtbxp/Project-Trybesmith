import { Router } from 'express';
import productRouter from './product.router';

const router = Router();

router.use(productRouter);

export default router;