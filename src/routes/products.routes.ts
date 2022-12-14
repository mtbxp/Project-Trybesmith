import { Router } from 'express';
import productsController from '../controllers/products.controller';

const useRouter = Router();

useRouter.post('/', productsController.createNewProductController);

export default useRouter;