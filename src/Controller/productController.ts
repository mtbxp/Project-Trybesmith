import { Request, Response } from 'express';
import listAllProducts from '../service/productService';

export async function cadastro(req: Request, res: Response) {
  return 'ok';
}

export async function listAllProductsController(req: Request, res: Response) {
  const { status, data } = await listAllProducts();
  res.status(status).json(data);
}
