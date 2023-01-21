import { Request, Response } from 'express';
import { IProduct } from '../types';

import productService from '../services/product.service';

const create = async (req: Request, res: Response): Promise<void> => {
  const product = req.body as IProduct;
  const { status, data, error } = await productService.create(product);
  if (error) {
    res.status(status).json(error);
    return;
  }
  res.status(status).json(data);
};

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
};

export default { 
  create,
  getAll,
};
