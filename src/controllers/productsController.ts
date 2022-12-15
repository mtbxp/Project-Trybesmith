import { Request, Response } from 'express';
import * as productsServices from '../services/productsService';

export async function getAll(_req: Request, res: Response) {
  const products = await productsServices.getAll();
  return res.status(200).json(products);
}

export async function insertProducts(req: Request, res: Response) {
  const product = req.body;
  const productCreate = await productsServices.insertProducts(product);

  return res.status(201).json(productCreate);
}
