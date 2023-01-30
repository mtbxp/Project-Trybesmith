import { Router } from 'express';
import productsController from '../controllers/productsController';

const productRouter = Router();

productRouter.post('/', productsController.addProduct);

export default productRouter;