import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';

const productRouter = Router();

productRouter.get('/products', ProductController.getAll);

productRouter.post('/products', ProductController.create);

export default productRouter;