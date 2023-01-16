import { Router } from 'express';
import { orderController } from '../msc';

const orderRoutes = Router();

orderRoutes.get('/', orderController.getAll);

export default orderRoutes;
