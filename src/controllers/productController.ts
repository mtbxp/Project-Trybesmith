import { Request, Response } from 'express';
// import { TProduct } from '../types';
import productService from '../services/productService';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

export default { getAll };