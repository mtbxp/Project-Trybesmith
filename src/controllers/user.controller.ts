import { Request, Response, NextFunction } from 'express';
import userServices from '../services/user.services';

async function postUser(request: Request, response: Response, _next: NextFunction) {
  const token = await userServices.postUser(request.body);  
  return response.status(201).json({ token });
}

export default {
  // getProductById,
  // getAllProducts,
  postUser,
  // updateProduct,
};