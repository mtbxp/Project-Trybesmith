import { Request, Response } from 'express';
import productsService from '../services/products.service';

export default async function insertProducts(req: Request, res: Response) {
  const { name, amount } = req.body;

  const result = await productsService(name, amount);

  return res.status(201).json(result);
}