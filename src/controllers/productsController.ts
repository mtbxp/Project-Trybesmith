import { Request, Response } from 'express';
import * as productsService from '../services/productsService'; 
import IProduct from '../Interfaces/products.Interface';

export async function registerProduct(req: Request, res: Response) {
  const { name, amount } = req.body as IProduct;
  const payload: IProduct = { name, amount };
  const newProductRegister = await productsService.createProduct(payload);
  res.status(201).json(newProductRegister);
}
export async function getAllProducts(req: Request, res: Response) {
  const products: IProduct[] = await productsService.getProducts();
  res.status(200).json(products);
}
