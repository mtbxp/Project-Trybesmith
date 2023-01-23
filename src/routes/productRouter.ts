import { Router } from 'express';
import * as ProductController from '../controller/productController';

const router = Router();

router.post('/', ProductController.createProduct);

export default router;