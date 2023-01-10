import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', productsController.registerProduct);
productsRouter.get('/', productsController.getAllProducts);

export default productsRouter;