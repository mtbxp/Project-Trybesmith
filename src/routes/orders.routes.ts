import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const useRouter = Router();

useRouter.get('/', ordersController.getAllOrdersController);

export default useRouter;