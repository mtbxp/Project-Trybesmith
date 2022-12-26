import { Request, Response } from 'express';
import addProduct from '../services/products.service';

export default async function registerNewProduct(req: Request, res: Response): Promise<void> {
  const newProduct = req.body;
  const createdProduct = await addProduct(newProduct);
  res.status(201).json(createdProduct);
}