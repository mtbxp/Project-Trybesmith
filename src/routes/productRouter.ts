import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();

const productCont = new ProductController();

router.post('/', productCont.create);

export default router;