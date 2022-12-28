import { Request, Response } from 'express';
import { addProduct, findProducts } from '../services/products.service';

export async function registerNewProduct(req: Request, res: Response): Promise<void> {
  const newProduct = req.body;
  const createdProduct = await addProduct(newProduct);
  res.status(201).json(createdProduct);
}

export async function getAllProducts(_req: Request, res: Response): Promise<void> {
  const products = await findProducts();
  res.status(200).json(products);
}