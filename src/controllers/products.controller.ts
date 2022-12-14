import { Request, Response } from 'express';
import * as productsService from '../services/products.service';

export async function createProduct(req: Request, res: Response) {
  const newProduct = req.body;
  const { message } = await productsService.createProduct(newProduct);
  return res.status(201).json(message);
}

export async function getAll(_req: Request, res: Response) {
  const { message } = await productsService.getAll();
  return res.status(200).json(message);
}