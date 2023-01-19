import { Request, Response } from 'express';
import { IProduct } from '../interfaces';

import productService from '../services/products.service';

const create = async (req: Request, res: Response): Promise<void> => {
  const product = req.body as IProduct;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
};

export default { 
  create,
};
