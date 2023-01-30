import { Request, Response } from 'express';
import productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productsService.createProduct(product);
  return res.status(201).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

export default {
  createProduct,
  getAllProducts,
};