import { Request, Response } from 'express';  
import insertProductModel from '../../models/products';

const insertProductService = async (req: Request, _res: Response) => {
  const { name, amount } = req.body;
  const id = await insertProductModel(name, amount);
  return { id, name, amount };
};

export default insertProductService;