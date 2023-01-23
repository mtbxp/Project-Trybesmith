import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getProducts = async (req: Request, res: Response) => {
  const products = await productsService.getProducts();

  return res.status(200).json(products);
};

const registerProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await productsService.registerProduct(product);

  return res.status(201).json(newProduct);
};

export default {
  registerProduct,
  getProducts,
};