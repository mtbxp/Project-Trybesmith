import { Request, Response } from 'express';
import * as productsServices from '../services/productsService';

export async function getAll(_req: Request, res: Response) {
  const products = await productsServices.getAll();
  return res.status(200).json(products);
}

export async function insertProducts(_req: Request, res: Response) {
  const { productBody } = _req.body;
  const products = await productsServices.insertProducts(productBody);

  return res.status(201).json(products);
}
