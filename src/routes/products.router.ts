import express from 'express';
import { getAllProducts, registerNewProduct } from '../controllers/products.controller';
import validNewProduct from '../middlewares/validProduct';

const productsRouter = express.Router();

export default productsRouter
  .get('/products', getAllProducts)
  .post('/products', validNewProduct, registerNewProduct);