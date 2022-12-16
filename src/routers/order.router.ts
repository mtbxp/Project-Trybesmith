import { Router } from 'express';
import getAll from '../controllers/order.controller';

const routers = Router();

routers.get('/', getAll);

export default routers;