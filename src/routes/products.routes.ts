import { Router } from 'express';
import * as controllerProducts from '../controllers/products.controllers';
import newProductValidation from '../middlewares/validations';

const productRouter = Router();

productRouter.post('/', newProductValidation, controllerProducts.addNewProduct);
productRouter.get('/', controllerProducts.getAllProducts);

export default productRouter;