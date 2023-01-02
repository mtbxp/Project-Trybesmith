import { Request, Response } from 'express';
import productService from '../services/products.service';

async function getAllProducts(_req: Request, res: Response) {
  const { status, result } = await productService.getAllProducts();
  
  res.status(status).json(result);
}

async function insertProduct(Req: Request, res: Response) {
  const { name, amount } = Req.body;
  const { status, result, message } = await productService
    .insertProduct(name, amount);
  
  if (message) res.status(status).json(message);

  res.status(status).json(result);
}

export default {
  getAllProducts,
  insertProduct,
};