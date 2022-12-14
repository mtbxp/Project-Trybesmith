import { Request, Response } from 'express';
import { getAllProducts, create } from '../services/products.service';

export async function getAll(_req: Request, res: Response) {
  const products = await getAllProducts();
  return res.status(200).json(products);
}

export async function createProduct(req: Request, res: Response) {
  const products = await create(req.body);
  return res.status(201).json(products);
}