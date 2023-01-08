import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();
console.log('chegou rota');
productsRouter.post('/', productsController.registerProduct);

export default productsRouter;