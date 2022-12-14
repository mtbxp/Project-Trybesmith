import { Request, Response } from 'express';
import { TProduct } from '../types';
import productService from '../services/productService';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
    const product = req.body as TProduct;
    const { status, data } = await productService.create(product);
    res.status(status).json(data);
  }

export default { getAll, create };