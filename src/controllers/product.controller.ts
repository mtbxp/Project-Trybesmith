import { Request, Response } from 'express';
import productService from '../services/product.service';
import httpStatusCodes from '../httpStatusCodes';

const createProductController = async (req: Request, res: Response) => {
  const newProduct = await productService.createProductService(req.body);
  return res.status(httpStatusCodes.CREATED).json(newProduct);
};

export default {
  createProductController,
};
