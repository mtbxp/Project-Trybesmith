import { Router } from 'express';
import createProduct from '../controller/products.controller';

const procuctsRoute = Router();

procuctsRoute.post('/', createProduct);

export default procuctsRoute;