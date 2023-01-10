import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const router = Router();

const product = new ProductsController();

router.post('/', product.insert);

export default router;