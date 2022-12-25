import { Request, Response } from 'express';
import productsService from '../services/products.service';

const addProduct = async (req: Request, res: Response):Promise<void> => {
  const product = req.body;
  const result = await productsService.addProduct(product);
  res.status(201).json(result);
};

export default {
  addProduct,
};