import { Router } from 'express';
import productsControllers from '../controllers/products.controllers';
import validationProduct from '../middlewares/validationProduct';

const productRouter = Router();

productRouter.post('/', validationProduct, productsControllers.addProduct);
productRouter.get('/', productsControllers.getAllProducts);

export default productRouter;
