import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

const { create } = new ProductController();

productRouter.post('/', create);

export default productRouter;
