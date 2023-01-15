import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const productCreated = await productsServices.create(product);
  res.status(201).json(productCreated);
};

export default {
  createProduct,
};