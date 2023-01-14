import { Request, Response } from 'express';
import productsService from '../services/productsService';

const registerProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const product = await productsService.registerProduct(body);
  res.status(201).json(product);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const product = await productsService.getAllProducts();
  res.status(200).json(product);
};

export default {
  registerProduct,
  getAllProducts,
};
