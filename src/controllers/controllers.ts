import { Request, Response } from 'express';
import service from '../services/Services';

const getAllProducts = async (req: Request, res: Response) => {
  const products = await service.getAlProducts();
  res.status(200).json(products);
};

export default { getAllProducts };