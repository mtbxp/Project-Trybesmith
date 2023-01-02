import { Request, Response } from 'express';
import productService from '../services/products.service';

async function getAllProducts(_req: Request, res: Response) {
  const { status, result } = await productService.getAllProducts();
  
  res.status(status).json(result);
}

export default {
  getAllProducts,
};