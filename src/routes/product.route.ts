import express from 'express';
import ProductController from '../controllers/product.controller';

const router = express.Router();

const productController = new ProductController();

router.post('/', (req, res) => productController.addProduct(req, res));
router.get('/', (req, res) => productController.getAllProducts(req, res));

export default router;