import { Request, Response } from 'express';
import * as productsService from '../services/products.service';
import statusCodes from '../utils/statusCodes';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const products = await productsService.getAll();
  
  return res.status(statusCodes.OK).json(products);
}

async function createProducts(req: Request, res: Response): Promise<Response> {
  const { name, amount } = req.body;
  const newProducts = await productsService.createProducts(name, amount);

  return res.status(statusCodes.CREATED).json(newProducts);
}

async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const product = await productsService.getById(Number(id));

  return res.status(statusCodes.OK).json(product);
}

// const getAll = async (_req: Request, res: Response): Promise<Response> => {
//   const products = await productsService.getAll();
  
//   return res.status(statusCodes.OK).json(products);
// };

export default {
  getAll,
  createProducts,
  getById,
};