import { Router } from 'express';
import productsController from '../controllers/productsController';

const productRouter = Router();

productRouter.post('/', productsController.addProduct);
productRouter.get('/', productsController.getAllProducts);

export default productRouter;