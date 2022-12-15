import { Request, Response } from 'express';
import * as productService from '../services/product.service';
import productCheck from '../middlewares/productVerification';

export async function create(req: Request, res: Response) {
  const { name, amount } = req.body;

  const { error } = productCheck(req.body);

  const statusCode = error && /"\w.*" is required/.test(error?.message) ? 400 : 422;

  if (error) return res.status(statusCode).json({ message: error.message });
  const { status, result } = await productService.create({ name, amount });

  res.status(status).json(result);
}

export async function getAll(req: Request, res: Response) {
  const { status, result } = await productService.getAll();

  res.status(status).json(result);
}