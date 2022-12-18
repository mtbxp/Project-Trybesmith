import { Router } from 'express';
import { getAll, insertOrder } from '../controllers/order.controller';
import validateToken from '../middlewares/token.middleware';

const routers = Router();

routers.get('/', getAll);

routers.post('/', validateToken, insertOrder);

export default routers;