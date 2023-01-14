import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const getAll = async (req: Request, res: Response) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

export default { getAll };