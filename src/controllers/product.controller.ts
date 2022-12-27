import { Request, Response } from 'express';
import productsService from '../services/products.service';

const addProduct = async (req: Request, res: Response):Promise<void> => {
  const product = req.body;
  const result = await productsService.addProduct(product);
  res.status(201).json(result);
};

const getAll = async (_req: Request, res: Response) => {
  const product = await productsService.getAll();
  return res.status(200).json(product);
};

export default {
  addProduct,
  getAll,
};