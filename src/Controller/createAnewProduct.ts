import { Request, Response } from 'express';
import * as serviceProducts from '../Service/productsService';

export async function createANewProduct(request: Request, response: Response) {
  const { name, amount } = request.body;
  // const newProduct = '';

  const newProduct = await serviceProducts.createNewProduct(name, amount);

  return response.status(201).json(newProduct);
}

export async function getAllProducts(_request: Request, response: Response) {
  const allProducts = await serviceProducts.getAll();

  return response.status(200).json(allProducts);
}
