import { Router } from 'express';
import { getAllProducts, createANewProduct } from '../Controller/createAnewProduct';

const router = Router();

router.post('/products', createANewProduct);

router.get('/products', getAllProducts);

export default router;