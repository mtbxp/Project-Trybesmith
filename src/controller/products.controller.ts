import { Request, Response } from 'express';
import * as productsService from '../service/products.service';

export default async function addNewProduct(req: Request, res: Response) {
  const product = req.body;
  const { message } = await productsService.default(product);
  return res.status(201).json(message);
}