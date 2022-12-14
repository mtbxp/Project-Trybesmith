import { Router } from 'express';
import ProductController from '../controllers/products.controller';

// const middlewares = require('../middlewares/product.mid');

const productRouter = Router();

const productsController = new ProductController();

productRouter.get('/', productsController.getAllProducts.bind(productsController));
// productRouter.get('/:id', productsController.getById);
// productRouter.post('/', productController.insertProduct);
// productRouter.delete('/:id', productsController.deleteProduct);

export default productRouter;