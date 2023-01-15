import { Router } from 'express';
import * as productController from '../controller/products.controller';

const productRouter = Router();

productRouter.post('/', productController.default);

export default productRouter;