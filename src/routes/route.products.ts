import { Router } from 'express';
import controllerProducts from '../controllers/controller.products';

const router = Router();

router.get('/', controllerProducts.getAllProducts);

export default router;