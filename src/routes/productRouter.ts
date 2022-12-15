import { Router } from 'express';
import * as productController from '../controllers/productController';

const productRouter = Router();

productRouter.post('/', productController.insertProduct);

export default productRouter;