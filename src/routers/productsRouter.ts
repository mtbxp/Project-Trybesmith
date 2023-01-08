import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post('/', productsController.registerProduct);

export default productsRouter;