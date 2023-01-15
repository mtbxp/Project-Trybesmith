import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const productCreated = await productsServices.create(product);
  res.status(201).json(productCreated);
};

const getAll = async (_req: Request, res: Response) => {
  const allProducts = await productsServices.getAll();
  res.status(200).json(allProducts);
};

export default {
  createProduct,
  getAll,
};