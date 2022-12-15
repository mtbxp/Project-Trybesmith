import { Request, Response } from 'express';
import {
  registerProductService,
  getAllProductsService,
} from '../services/products.service';

export const registerProductController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const product = await registerProductService(req.body);
  res.status(201).json(product);
};

export const getAllProductsController = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const allProducts = await getAllProductsService();
  res.status(200).json(allProducts);
};