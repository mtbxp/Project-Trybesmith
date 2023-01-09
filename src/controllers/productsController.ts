import { Request, Response } from 'express';
import productsServices from '../services/productsServices';
import Product from '../types/Product';

const registerProduct = async (req: Request, res:Response) => {
  const registeredProduct = await productsServices.registerProduct(req.body);

  return res.status(201).json(registeredProduct);
};

const getAllProducts = async (_req: Request, res:Response) => {
  const allProducts: Product[] = await productsServices.getAllProducts();

  return res.status(200).json(allProducts);
};

export default {
  registerProduct,
  getAllProducts,
};