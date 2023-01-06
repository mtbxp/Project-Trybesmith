import { Request, Response } from 'express';
import productsServices from '../services/productsServices';
import { TProduts } from '../types';

const productModel = async (req: Request<unknown, unknown, TProduts>, res:Response) => {
  const product = await productsServices.productAdd(req.body);
 
  return res.status(201).json(product);
};

const getAll = async (_req:Request, res:Response) => {
  const products = await productsServices.getAll();
  console.log('controle', products);
  return res.status(200).json(products);
};

export default {
  productModel,
  getAll,
};