import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import validationName from '../middlewares/productValidation';
import validationAmount from '../middlewares/productValidation2';

const router = Router();

router.post('/', validationName, validationAmount, productsController.insertProductC);
router.get('/', productsController.getAllProductC);

export default router;