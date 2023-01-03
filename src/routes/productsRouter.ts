import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', (req, res) => productsController.default(req, res));

export default productsRouter;