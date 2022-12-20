import { Request, Response } from 'express';
import addNewProduct, { getAllProducts } from '../services/productService';

const addProducts = async (req: Request, res: Response) => {
  const productDate = req.body;
  const result = await addNewProduct(productDate);
  const { id, name, amount } = result.date[0];
  res.status(result.status).json({ id, name, amount });
};

export const getProducts = async (req: Request, res: Response) => {
  const result = await getAllProducts();
  res.status(result.status).json(result.date);
};

export default addProducts; 