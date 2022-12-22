import { Request, Response, NextFunction } from 'express';
import orderServices from '../services/order.services';

async function getAllOrders(_request: Request, response: Response, _next: NextFunction) {
  const result = await orderServices.getAllOrders();
  return response.status(200).json(result);
}

export default {
  // getProductById,
  getAllOrders,
  // postProduct,
  // updateProduct,
};