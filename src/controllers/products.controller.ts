import { Request, Response } from 'express';
import { Product } from '../interfaces/products';
import productService from '../service/product.service';

const createNewProducts = async (req: Request, res: Response) => {
  const product: Product = req.body;
  const result = await productService.createNewProducts(product);

  res.status(201).json(result);
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await productService.getAllProducts();

  res.status(200).json(result);
};

export default {
  createNewProducts,
  getAllProducts,
};