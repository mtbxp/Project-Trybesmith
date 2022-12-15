import { Router } from 'express';
import * as ProductController from '../controllers/product.controller';
import loginvery from '../middlewares/validProduct';

const productRouter = Router();

productRouter.get('/products', ProductController.getAll);

productRouter.post('/products', loginvery, ProductController.create);

export default productRouter;