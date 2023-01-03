import { Request, Response } from 'express';
import * as productsService from '../services/productsService'; 

export default async function registerProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const payload = { name, amount };
  const newProductRegister = await productsService.default(payload);
  res.status(201).json(newProductRegister);
}