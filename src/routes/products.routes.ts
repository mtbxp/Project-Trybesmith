import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router: Router = Router();

router.post('/', productsController.create);
router.get('/', productsController.getAll);

export default router;