import { Router } from 'express';
import ProductController from '../controller/productsController';

const router = Router();

const productsController = new ProductController();

router.get('/', productsController.productsGetAll);
router.post('/', productsController.productCreated);

export default router;