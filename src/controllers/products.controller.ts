import { Request, Response } from 'express';
import productsService from '../services/products.service';

const addNewProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const { statusErro, response } = await productsService.addNewProduct(product);

  if (statusErro) return res.status(404).json(response);
  return res.status(201).json(response);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const { statusErro, response } = await productsService.getAllProducts();

  if (statusErro) return res.status(404).json(response);
  return res.status(200).json(response);
};

export default {
  addNewProduct,
  getAllProducts,
};