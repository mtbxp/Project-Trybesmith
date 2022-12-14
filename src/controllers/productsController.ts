import { Request, Response } from 'express';
import { Product } from '../interfaces/interfaces';
import * as productsService from '../services/productsService';

const addProduct = async (req: Request, res: Response) => {
  const product = req.body as Product;
  const result = await productsService.addProduct(product);
  // if (!result) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(201).json(result);
};

const getAllProds = async (req: Request, res: Response) => {
  const result = await productsService.getAllProds();
  return res.status(200).json(result);
};

export {
  addProduct,
  getAllProds,
};
