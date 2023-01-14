import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const getAll = async (req: Request, res: Response) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

const insert = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productsServices.insert(product);

  return res.status(201).json(result);
};

export default { getAll, insert };