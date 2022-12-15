import express from 'express';
import productsControllers from '../controllers/products.controllers';

const productsRouters = express.Router();

productsRouters.post('/', productsControllers.createProduct);
productsRouters.get('/', productsControllers.getAll);

export default productsRouters;