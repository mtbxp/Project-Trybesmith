import { Request, Response } from 'express';
import productsServices from '../services/productsServices';
import { TProduts } from '../types';

const productModel = async (req: Request<unknown, unknown, TProduts>, res:Response) => {
  const product = await productsServices.productAdd(req.body);
 
  return res.status(201).json(product);
};

export default {
  productModel,
};