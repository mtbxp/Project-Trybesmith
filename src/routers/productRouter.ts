import express from 'express';
import productController from '../controllers/productController';
import { productRequired, productFormat } from '../middlewares/productMiddleware';

const router = express.Router();

router.post('/', productRequired, productFormat, productController.registerProduct);

router.get('/', productController.getProducts);

export default router;