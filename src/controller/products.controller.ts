import { Request, Response } from 'express';
import * as productsService from '../service/products.service';

export async function addNewProduct(req: Request, res: Response) {
  const product = req.body;
  const { message } = await productsService.addNewProduct(product);
  return res.status(201).json(message);
}

export async function showAllProducts(_req: Request, res: Response) {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
}