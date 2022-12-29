import { Request, Response } from 'express';
import { addProduct, findProducts } from '../services/products.service';

export async function registerNewProduct(req: Request, res: Response): Promise<void> {
  const newProduct = req.body;
  const { status, data } = await addProduct(newProduct);
  res.status(status).json(data);
}

export async function getAllProducts(_req: Request, res: Response): Promise<void> {
  const { status, data } = await findProducts();
  res.status(status).json(data);
}