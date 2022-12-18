import { Request, Response } from 'express';
import productsService from '../services/products.service';

const registerProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const registeredProduct = await productsService.registerProduct(product);

  return res.status(201).json(registeredProduct);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

export default {
  getAllProducts,
  registerProduct,
};
