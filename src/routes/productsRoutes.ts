import { Router } from 'express';
import productsController from '../controllers/productsController';
import productsMiddlewares from '../middlewares/productsMiddlewares';

const productRouter = Router();

productRouter.post(
  '/',
  productsMiddlewares.hasAllFields,
  productsMiddlewares.isString,
  productsMiddlewares.hasLength,
  productsController.addProduct,
);
productRouter.get('/', productsController.getAllProducts);

export default productRouter;