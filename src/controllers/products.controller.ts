import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAll = async (_req: Request, res: Response):Promise<void> => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response):Promise<void> => {
  const product = req.body;
  const productCreated = await productsService.create(product);
  res.status(201).json(productCreated);
};

export default {
  getAll,
  create,
};