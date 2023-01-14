import { Router } from 'express';
import * as productController from '../Controller/productController';

const router = Router();

router.get('/', productController.listAllProductsController);
router.post('/', productController.create);

export default router;
