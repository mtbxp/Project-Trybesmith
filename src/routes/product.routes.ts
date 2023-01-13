import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const { create, getProducts } = new ProductController();

const productRouter = Router();

productRouter.post('/', create);
productRouter.get('/', getProducts);

export default productRouter;
