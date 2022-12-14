import { Request, Response } from 'express';
import { ProductReq } from '../interfaces/productsReq.interfaces';

import * as service from '../services/products.service';

export async function postProducts(req: Request, res: Response) {
  const product = req.body as ProductReq;
  const insertId = await service.postProducts(product);
  const response = {
    id: insertId,
    name: product.name,
    amount: product.amount,
  };
  return res.status(201).json(response);
}

export async function getProducts() {
  return null;
}