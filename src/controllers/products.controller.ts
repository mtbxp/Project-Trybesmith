import { Request, Response } from 'express';
import {
  registerProductService,
  getAllProductsService,
} from '../services/products.service';

export const registerProductController = async (
  req: Request,
  res: Response,
) => {
  const product = await registerProductService(req.body);
  return res.status(201).json(product);
};

export const getAllProductsController = async (
  _req: Request,
  res: Response,
) => {
  const allProducts = await getAllProductsService();
  return res.status(200).json(allProducts);
};