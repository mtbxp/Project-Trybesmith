import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAll();
  
  return res.status(200).json(products);
};

export default {
  getAll,
};