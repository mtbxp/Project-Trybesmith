import { Request, Response } from 'express';
import productService from '../services/productService';
import { CREATED_CODE } from '../utils';

const registerProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const product = await productService.registerProduct(body);

  return res.status(CREATED_CODE).json(product);
};

export default {
  registerProduct,
};
