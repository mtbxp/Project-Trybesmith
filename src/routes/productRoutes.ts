import { Router } from 'express';
import productController from '../Controller/productController';

const router = Router();

router.get('/', productController.listAllProductsController);

export default router;
