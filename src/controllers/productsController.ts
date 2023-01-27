import { Request, Response } from 'express';
import producstService from '../services/producstService';

const addProducts = async (req: Request, res: Response) => {
  const product = req.body; // as Tproduct;
  const newProduct = await producstService.addProducts(product);
  res.status(201).json(newProduct);
};

const listProducts = async (req: Request, res: Response) => {
  const products = await producstService.listProducts();
  res.status(200).json(products);
};

export default { listProducts, addProducts };
