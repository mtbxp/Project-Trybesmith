import { Request, Response } from 'express';
import productService from '../services/productService';
import { CREATED_CODE, OK_CODE } from '../utils';

const registerProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const product = await productService.registerProduct(body);

  return res.status(CREATED_CODE).json(product);
};

const getProducts = async (_req: Request, res: Response) => {
  const products = await productService.getProducts();
  return res.status(OK_CODE).json(products);
};

export default {
  registerProduct,
  getProducts,
};
