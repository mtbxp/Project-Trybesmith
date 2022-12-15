import { Request, Response, NextFunction } from 'express';
import userServices from '../services/product.services';

async function postUser(request: Request, response: Response, _next: NextFunction) {
  const token = await userServices.postProduct(request.body);  
  return response.status(201).json({ token });
}

export default {
  // getProductById,
  // getAllProducts,
  postUser,
  // updateProduct,
};