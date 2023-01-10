import { Request, Response } from 'express';
import productsService from '../services/productsService';

const registerProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { status, message } = await productsService.registerProduct(body);
  res.status(status).json(message);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const { status, message } = await productsService.getAllProducts();
  res.status(status).json(message);
};

export default {
  registerProduct,
  getAllProducts,
};
