import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { TProducts } from '../types';

const insertProduct = async (req: Request, res: Response) => {
  const product: TProducts = req.body;
  const { type, message } = await productsService.insertProduct(product);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

export default {
  insertProduct,
};