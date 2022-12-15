import { Request, Response } from 'express';
import service from '../services/Services';

const getAllProducts = async (req: Request, res: Response) => {
  const products = await service.getAlProducts();
  res.status(200).json(products);
};

const insertProducts = async (req: Request, res: Response) => {
  const product = req.body;
  const { type, message } = await service.insertProduct(product);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

const getAllUsers = async (req: Request, res: Response) => {
  const products = await service.getAllUsers();
  res.status(200).json(products);
};

const insertUser = async (req: Request, res: Response) => {
  const user = req.body;
  const { type, message } = await service.insertUser(user);
  
  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

export default {
  getAllProducts,
  insertProducts,
  getAllUsers,
  insertUser,
};