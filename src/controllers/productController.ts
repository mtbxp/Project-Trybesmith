import { Request, Response } from 'express';
import * as productService from '../services/productService';

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const { name, amount } = product;
  const newProduct = await productService.insertProduct(name, amount);

  return res.status(201).json(newProduct);
};

export {
  insertProduct,
};