import { Router } from 'express';
import productsController from '../controllers/productsController';
import { nameValidate, amountValidate } from '../middlewares/productsValidations';

const router = Router();

router.get('/products', productsController.getAllProducts);
router.post('/products', nameValidate, amountValidate, productsController.createProduct);

export default router;