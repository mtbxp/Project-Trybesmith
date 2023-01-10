import { Request, Response } from 'express';
import productsService from '../service/products.service';
import { TProducts } from '../types';

const getProducts = async (req: Request, res: Response) => {
  const products = await productsService.getProducts();
  res.status(200).json(products);
};

const insertProduct = async (req: Request, res: Response) => {
  const product: TProducts = req.body;
  const { type, message } = await productsService.insertProduct(product);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

export default {
  getProducts,
  insertProduct,
};