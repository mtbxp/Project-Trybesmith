import express from 'express';
import productsController from '../controllers/products.controller';
import productValidations from '../middlewares/productValidations';

const router = express.Router();

router.get('/', productsController.getProducts);

router.post('/', productValidations.validateProduct, productsController.createProduct);

export default router;