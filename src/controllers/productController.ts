import { Request, Response } from 'express';
import ser from '../services/productService';

const getAll = async (_req: Request, res: Response) => {
  const produtos = await ser.getAll();
  res.status(200).json(produtos);
};

const createProduct = async (req: Request, res: Response) => {
  const { type, message } = await ser.createProduct(req.body);
  if (type) return res.status(444).json({ message: 'Erro na criação' });
  return res.status(201).json(message);
};

export default { getAll, createProduct };