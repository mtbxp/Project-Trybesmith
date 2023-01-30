import { Router } from 'express';
import productsController from '../controllers/products.controller';
import { validateAmout, validateName } from '../middlewares/validateProducts';

const router = Router();

router.get('/products', productsController.getProducts);
router.post('/products', validateName, validateAmout, productsController.registerProduct);

export default router;