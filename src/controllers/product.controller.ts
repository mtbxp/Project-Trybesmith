import { Request, Response } from 'express';
import { ProductService } from '../interfaces';
import * as productService from '../services/product.service';

export async function create(req: Request, res: Response): Promise<ProductService> {
  const { name, ammount } = req.body;
  const { status, result } = await productService.create({ name, ammount });

  res.status(status).json(result);
}