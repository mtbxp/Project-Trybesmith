import { Request, Response, NextFunction } from 'express';
import productServices from '../services/product.services';

async function postProduct(request: Request, response: Response, _next: NextFunction) {
  const { name, amount } = request.body;
  const result = await productServices.postProduct({ name, amount });
  // console.log(result);
  
  return response.status(201).json(result);
}

export default {
  // getProductById,
  // getAllProducts,
  postProduct,
  // updateProduct,
};