import { Request, Response } from 'express';
import productsServices from '../services/productsServices';

const registerProduct = async (req: Request, res:Response) => {
  console.log('chegou na controller', req.body);
  const registeredProduct = await productsServices.registerProduct(req.body);

  return res.status(201).json(registeredProduct);
};

export default {
  registerProduct,
};