import { Request, Response } from 'express';
import * as ProductService from '../services/product.service';
import { TProduct } from '../types';

export async function create(req: Request, res: Response) {
  const product = req.body as TProduct;
  const newProduct = await ProductService.create(product);

  return res.status(201).json(newProduct);
}

export function getAll() {

}