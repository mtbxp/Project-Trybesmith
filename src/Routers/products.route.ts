import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.get('/', productsController.getAll);
router.post('/', productsController.createProducts);
router.get('/:id', productsController.getById);

export default 
router;
