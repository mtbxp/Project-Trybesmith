import { Router } from 'express';
import productsController from '../controllers/productController';

const router = Router();

router.get('/', productsController.getAll);

router.post('/', productsController.productCadastro);

export default router;