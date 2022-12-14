import { Request, Response } from 'express';

import * as productsService from '../services/products.service';

async function createProduct(request: Request, response: Response): Promise<Response> {
  const { name, amount } = request.body;

  const product = await productsService.createProduct({ name, amount });

  return response.status(201).json(product);
}

export { createProduct };
