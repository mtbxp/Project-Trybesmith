import { Request, Response } from 'express';
import productsService from '../service/products.service';
import statuscode from '../utils/statuscode';

const create = async (req: Request, res: Response) => {
  const prods = req.body;
  const result = await productsService.create(prods);
  res.status(statuscode.CREATED).json(result);
};

const getAll = async (_req: Request, res: Response) => {
  const result = await productsService.getAll();
  res.status(statuscode.OK).json(result);
};

export default {
  create,
  getAll,
};
