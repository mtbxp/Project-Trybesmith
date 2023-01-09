import { Request, Response } from 'express';
import { saveProduct, getAllProducts } from '../services/products';

const register = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const addedProduct = await saveProduct(name, amount);

  res.status(201).json(addedProduct);
};

const getAll = async (req: Request, res: Response) => {
  const products = await getAllProducts();

  res.status(200).json(products);
};

export { register, getAll };