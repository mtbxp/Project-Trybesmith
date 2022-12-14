import { Request, Response } from 'express';

import * as productsService from '../services/products.service';

async function createProduct(request: Request, response: Response): Promise<Response> {
  const { name, amount } = request.body;

  const product = await productsService.createProduct({ name, amount });

  return response.status(201).json(product);
}

async function getAllProducts(request: Request, response: Response): Promise<Response> {
  const products = await productsService.getAllProducts();

  return response.json(products);
}

export { createProduct, getAllProducts };
