import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

export default {
  getAllProducts,
};
