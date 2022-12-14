import { Router } from 'express';
import ProductController from '../controller/products.controller';

const route = Router();
const productController = new ProductController();

route.post('/', productController.createProducts.bind(productController));
route.get('/', productController.getProducts.bind(productController));

export default route;