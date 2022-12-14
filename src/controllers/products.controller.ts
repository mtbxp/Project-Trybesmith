import { Request, Response } from 'express';
import { getAllProducts } from '../services/products.service';

export default async function getAll(_req: Request, res: Response) {
  const products = await getAllProducts();
  return res.status(200).json(products);
}