import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAll = async (_req: Request, res: Response):Promise<void> => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

export default {
  getAll,
};