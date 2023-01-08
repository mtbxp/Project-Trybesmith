import { Request, Response } from 'express';
import * as serviceProducts from '../services/products.service';

export async function getAllProducts(_req: Request, res: Response) {
  const { message } = await serviceProducts.getAllProducts();
  return res.status(200).json(message);
}

export async function addNewProduct(req: Request, res: Response) {
  const addProd = req.body;
  const { message } = await serviceProducts.addNewProduct(addProd);
  return res.status(201).json(message);
}
