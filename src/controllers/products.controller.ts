import { Request, Response } from 'express';
import productsService from '../services/products.service';

const createProduct = async (req: Request, res: Response) => {
  const products = req.body;
  
  const insertProduct = await productsService.createProduct(products);

  return res.status(201).json(insertProduct);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProducts();

  return res.status(200).json(products);
};

export default {
  createProduct,
  getAllProducts,
};