import express from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = express.Router();

const productsController = new ProductsController();

productsRouter.post('/', productsController.create);

productsRouter.get('/', productsController.getAll);

export default productsRouter;