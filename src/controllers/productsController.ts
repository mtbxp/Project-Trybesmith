import { Request, Response } from 'express';
import * as productsService from '../services/productsService';

export async function getAll(_req: Request, res: Response) {
  const products = await productsService.getAll();
  res.status(200).json(products);
}

export async function insertProduct(req: Request, res: Response) {
  const products = req.body;
  const result = await productsService.insertProduct(products);

  res.status(201).json(result);
}