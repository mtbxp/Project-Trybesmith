import { Request, Response } from 'express';
import productsService from '../services/productsService';

const addProduct = async (req: Request, res: Response):Promise<void> => {
  const product = req.body;
  const result = await productsService.addProduct(product);
  res.status(201).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

export default {
  addProduct,
  getAllProducts,
};