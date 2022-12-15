import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, amount } = req.body;
  const insertId = await productService.createProduct({ name, amount });
  res.status(201).json({ id: insertId, name, amount });
};

export default { createProduct };