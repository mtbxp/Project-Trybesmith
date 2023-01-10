import { Request, Response } from 'express';
import service from '../services/products.service';

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await service.getAllProducts();
  return res.status(200).json(result);
};

const addNewProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const newProduct = await service.addNewProduct(body);
  return res.status(201).json(newProduct);
};

export default {
  getAllProducts,
  addNewProduct,
};