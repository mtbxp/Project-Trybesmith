import { Request, Response } from 'express';
import * as services from '../services/products.service';

export async function insertProductController(req: Request, res: Response) {
  const { name, amount } = req.body;
  const result = await services.insertProductService(name, amount);
  console.log(result);
  return res.status(201).json(result);
}

export async function getAll(_req: Request, res: Response) {
  const result = await services.getAll();
  return res.status(200).json(result);
}
