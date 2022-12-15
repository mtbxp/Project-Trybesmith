import { Router } from 'express';
import productsController from '../controllers/products.controller';

const useRouter = Router();

useRouter.get('/', productsController.getAllProductsController);
useRouter.post('/', productsController.createNewProductController);

export default useRouter;