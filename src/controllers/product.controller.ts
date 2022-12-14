import { Request, Response } from 'express';
import { Product } from '../interfaces/product.interface';
import * as productService from '../services/product.services';

const createNewProduct = async (req: Request, res: Response) => {
  const newProduct = req.body as Product;
  const response = await productService.createProduct(newProduct);
  return res.status(201).json(response);
};

export {
  createNewProduct,
};