import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import validateProducts from '../middlewares/validateProducts';

const productsRouter = Router();

productsRouter.post('/', validateProducts, (req, res) => productsController.default(req, res));

export default productsRouter;