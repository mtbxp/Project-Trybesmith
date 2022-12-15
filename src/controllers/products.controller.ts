import { Request, Response } from 'express';

import * as productsService from '../services/products.service';

export async function insertProduct(req: Request, res: Response) {
  const { body } = req;
  const returnProducts = await productsService.insertProduct(body);

  return res.status(201).json(returnProducts);
}

export async function getAll(req: Request, res: Response) {
  const products = await productsService.getAll();

  return res.status(200).json(products);
}