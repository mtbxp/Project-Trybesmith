import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  const { status, result } = await productService.create({ name, amount });

  res.status(status).json(result);
}