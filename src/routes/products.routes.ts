import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const router = Router();

const product = new ProductsController();

router.post('/', product.insert);
router.get('/', product.getAll);

export default router;