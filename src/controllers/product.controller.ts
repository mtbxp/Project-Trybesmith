import { Request, Response } from 'express';
import { Product } from '../interfaces/product.interface';
import * as productService from '../services/product.services';

export async function createNewProduct(req: Request, res: Response) {
  const newProduct = req.body as Product;
  const response = await productService.createProduct(newProduct);
  return res.status(201).json(response);
}

export async function getAllProducts(_req: Request, res: Response) {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
}