import { Router } from 'express';
import * as productController from '../controllers/productsController';
import validateName, { validateAmount } from '../midlleware/validateProduct';

const productRouter = Router();

productRouter.get('/', productController.getAll);
productRouter.post(
  '/', 
  validateName, 
  validateAmount, 
  productController.insertProducts,
);

export default productRouter;
