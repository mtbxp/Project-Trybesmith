import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';

const productRouter = Router();

productRouter.post('/products', ProductController.create);

export default productRouter;