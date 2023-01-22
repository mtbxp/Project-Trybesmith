import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import validation from '../middlewares/validateProduct';

const router = Router();

const productsController = new ProductsController();

router.post('/', validation.validationName, validation.validationAmount, productsController.create);
router.get('/', productsController.getAll);

export default router;