import { Request, Response } from 'express';
import productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productsService.createProduct(product);
  return res.status(201).json(result);
};

export default {
  createProduct,
};