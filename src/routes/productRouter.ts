import { Router } from 'express';
import * as ProductController from '../controller/productController';
import validateAmount from '../middlewares/validateAmount';
import validateName from '../middlewares/validateName';

const router = Router();

router.post('/', validateName, validateAmount, ProductController.createProduct);
router.get('/', ProductController.getAllProd);

export default router;