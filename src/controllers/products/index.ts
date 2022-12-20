import { Request, Response } from 'express';
import insertProductService from '../../services/products';

const insertProductController = async (req: Request, res: Response) => {
  const { id, name, amount } = await insertProductService(req, res);
  res.status(201).json({ id, name, amount });
};

export default insertProductController;
