import { Request, Response } from 'express';
import * as productService from '../services/productService';

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const { name, amount } = product;
  const { statusCode, newProduct } = await productService.insertProduct(name, amount);

  return res.status(statusCode).json(newProduct);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const { statusCode, allProducts } = await productService.getAllProducts();

  return res.status(statusCode).json(allProducts);
};

export {
  insertProduct,
  getAllProducts,
};