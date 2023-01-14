import { Request, Response } from 'express';
import { ProductDetail } from '../interfaces';
import * as ProductService from '../service/productService';

export async function create(req: Request, res: Response) {
  const product = req.body as ProductDetail;
  const { status, data } = await ProductService.create(product);
  res.status(status).json(data);
}

export async function listAllProductsController(req: Request, res: Response) {
  const { status, data } = await ProductService.listAllProducts();
  res.status(status).json(data);
}
