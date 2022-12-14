import { Request, Response } from 'express';
import { ProductDetail } from '../interfaces';
import * as productService from '../services/productService';

export async function create(req: Request, res: Response) {
  const product = req.body as ProductDetail;
  const { status, data } = await productService.create(product);
    
  res.status(status).json(data);
}

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
}