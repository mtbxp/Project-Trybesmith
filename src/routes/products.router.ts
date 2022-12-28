import express from 'express';
import { getAllProducts, registerNewProduct } from '../controllers/products.controller';

const productsRouter = express.Router();

export default productsRouter
  .get('/products', getAllProducts)
  .post('/products', registerNewProduct);