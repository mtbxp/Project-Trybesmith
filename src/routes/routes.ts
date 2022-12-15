import express from 'express';
import controller from '../controller/products.controller';

const router = express.Router();

router.post('/products', controller.createProductController);

router.get('/products', controller.getAllProductsController);

export default router;