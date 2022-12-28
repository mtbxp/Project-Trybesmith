import { Request, Response } from 'express';
import * as productsService from '../services/products.service';
import statusCodes from '../utils/statusCodes';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const products = await productsService.getAll();
  
  return res.status(statusCodes.OK).json(products);
}

// const getAll = async (_req: Request, res: Response): Promise<Response> => {
//   const products = await productsService.getAll();
  
//   return res.status(statusCodes.OK).json(products);
// };

export default {
  getAll,
};