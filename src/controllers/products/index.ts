import { Request, Response } from 'express';
import { insertProductService, getAllProductsService } from '../../services/products';

export const insertProductController = async (req: Request, res: Response) => {
  const { id, name, amount } = await insertProductService(req, res);
  res.status(201).json({ id, name, amount });
};

export const getAllProductsController = async (req: Request, res: Response) => {
  const allProducts = await getAllProductsService(req, res);
  res.status(200).json(allProducts);
};
