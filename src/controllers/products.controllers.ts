import { Request, Response } from 'express';
import { registerProduct, getAllProducts } from '../services/products.services';

const register = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const addedProduct = await registerProduct(name, amount);

  res.status(201).json(addedProduct);
};

const getAll = async (req: Request, res: Response) => {
  const products = await getAllProducts();

  res.status(200).json(products);
};

export { register, getAll };
