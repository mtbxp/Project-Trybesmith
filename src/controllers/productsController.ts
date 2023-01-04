import { Request, Response } from 'express';
import * as productsService from '../services/productsService'; 
import Product from '../Interfaces/products.Interface';

export async function registerProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const payload = { name, amount };
  const newProductRegister = await productsService.createProduct(payload);
  res.status(201).json(newProductRegister);
}
export async function getAllProducts(req: Request, res: Response) {
  const products: Product[] = await productsService.getProducts();
  res.status(200).json(products);
}
