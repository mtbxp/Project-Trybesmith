import { Request, Response } from 'express';
import productsService from '../services/products.service';

const addNewProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const { statusErro, response } = await productsService.addNewProduct(product);
  
  if (statusErro) return res.status(404).json({ response });
  res.status(201).json(response);
};

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();
  return allProducts;
};

export default {
  addNewProduct,
  getAllProducts,
};