import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import validateProducts from '../middlewares/validateProducts';

const productsRouter = Router();

productsRouter.post('/', validateProducts, (req, res) => 
  productsController.registerProduct(req, res));  
productsRouter.get('/', (req, res) => productsController.getAllProducts(req, res));

export default productsRouter;