import { Request, Response, NextFunction } from 'express';
import productServices from '../services/product.services';

async function postProduct(request: Request, response: Response, _next: NextFunction) {
  const { name, amount } = request.body;
  const result = await productServices.postProduct({ name, amount });  
  return response.status(201).json(result);
}

async function getAllProducts(_request: Request, response: Response, _next: NextFunction) {
  const result = await productServices.getAllProducts();
  return response.status(200).json(result);
}

export default {
  // getProductById,
  getAllProducts,
  postProduct,
  // updateProduct,
};