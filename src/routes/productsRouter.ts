import { Router } from 'express';
import ProductController from '../controller/productsController';

const router = Router();

const productsController = new ProductController();

router.post('/', productsController.productCreated);

export default router;