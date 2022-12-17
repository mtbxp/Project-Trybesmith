import { Request, Response } from 'express';
import * as serviceProducts from '../services/products.service';

export async function insertProducts(req: Request, res: Response) {
  const { name, amount } = req.body;

  const newProduct = await serviceProducts.insertProduct(name, amount);

  return res.status(201).json(newProduct);
}

export async function getAllProducts(_req: Request, res: Response) {
  const allProducts = await serviceProducts.getAllProducts();

  return res.status(200).json(allProducts);
}