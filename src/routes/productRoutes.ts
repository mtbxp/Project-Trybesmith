import { Router } from 'express';
import ProductController from '../controller/productController';

const router = Router();
const controller = new ProductController();

router.get('/products', (req, res) => controller.findAll(req, res));
router.post('/products', (req, res) => controller.addProducts(req, res));
export default router;