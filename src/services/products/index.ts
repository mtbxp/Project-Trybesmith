import { Request, Response } from 'express';  
import { getAllProducts as getAllProductsModel,
  insertProduct as insertProductModel } from '../../models/products';

export const insertProductService = async (req: Request, _res: Response) => {
  const { name, amount } = req.body;
  const id = await insertProductModel(name, amount);
  return { id, name, amount };
};

export const getAllProductsService = async (_req: Request, _res: Response) => {
  const products = await getAllProductsModel();
  return products;
};