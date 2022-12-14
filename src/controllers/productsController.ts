import { Request, Response } from 'express';
import productsService from '../services/productsService';

const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  console.log('TESTE');
  
  res.status(200).json(products);
};

export default {
  getAllProducts,
};