import { Request, Response } from 'express';
import productsService from '../services/productsService';
import { Product } from '../types/Product';

const addProduct = async (req: Request, res: Response) => {
  const product: Product = req.body;
  const addedProduct = await productsService.addProduct(product);

  return res.status(201).json(addedProduct);
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await productsService.getAllProducts();
  res.status(200).json(result);
};

export default {
  addProduct,
  getAllProducts,
};