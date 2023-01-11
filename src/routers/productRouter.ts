import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

router.post('/', productController.registerProduct);

export default router;