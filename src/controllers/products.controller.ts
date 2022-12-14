import { Request, Response } from 'express';
import productService from '../services/product.service';

const add = async (req: Request, res: Response) => {
  const productData = req.body;
  const newProduct = await productService.add(productData);
  return res.status(201).send(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return res.status(200).send(products);
};

export default { add, getAll };