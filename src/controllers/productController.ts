import { Request, Response } from 'express';
import productsService from '../services/productService';

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

export default {
  getAllProducts,
};