import express from 'express';
import productsController from '../controllers/products.controller';

const router = express.Router();

router.post('/', productsController.createProduct);

export default router;