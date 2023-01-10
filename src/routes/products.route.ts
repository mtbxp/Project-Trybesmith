import { Router } from 'express';
import controller from '../controllers/products.controllers';

const router = Router();

router.get('/', controller.getAllProducts);
router.post('/', controller.addNewProduct);

export default router;