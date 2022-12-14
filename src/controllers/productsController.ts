import { Request, Response } from 'express';
import * as productsService from '../services/productsService';
import { Tproducts } from '../types/types';

const getAllController = async (_req: Request, res: Response) => {
  const results = await productsService.default.getAllService();
  return res.status(200).json(results);
};

const createController = async (req: Request, res: Response) => {
  const products = req.body as Tproducts;
  const { status, data } = await productsService.default.createService(products);
  res.status(status).json(data);
};

export default {
  getAllController,
  createController,
};