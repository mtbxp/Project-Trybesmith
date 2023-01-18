import { Request, Response } from 'express';
import productService from '../services/productService';

const registerProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const registeredProduct = await productService.addProduct(product);
  res.status(201).json(registeredProduct);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const allProducts = await productService.getAllProducts();
  res.status(200).json(allProducts);
};

export default {
  registerProduct,
  getAllProducts };