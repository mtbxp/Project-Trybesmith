import express from 'express';
import registerNewProduct from '../controllers/products.controller';

const productsRouter = express.Router();

export default productsRouter
  .post('/products', registerNewProduct);