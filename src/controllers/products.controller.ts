import { Request, Response } from 'express';
import productsService from '../services/products.service';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  
  const insertProduct = await productsService.createProduct(product);

  return res.status(201).json(insertProduct);
};

export default {
  createProduct,
};