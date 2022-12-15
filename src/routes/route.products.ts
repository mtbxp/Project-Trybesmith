import { Router } from 'express';
import controllerProducts from '../controllers/controller.products';

const router = Router();

router.get('/', controllerProducts.getAllProducts);
router.post('/', controllerProducts.createProducts);

export default router;
