import { Response, Request } from 'express';
import * as productsService from '../services/products.service';

const validaNomeProdutos = async (request: Request, response: Response, next: any) => {
  const { name } = request.body;
  if (!name) return response.status(400).json({ message: '"name" is required' });
  if (typeof name !== 'string') {
    return response.status(422)
      .json({ message: '"name" must be a string' });
  }
  if (name.length <= 2) {
    return response.status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

const validaAmountProdutos = async (request: Request, response: Response, next: any) => {
  const { amount } = request.body;
  
  if (!amount) return response.status(400).json({ message: '"amount" is required' });
  if (typeof amount !== 'string') {
    return response.status(422).json({ message: '"amount" must be a string' });
  }
  if (amount.length <= 2) {
    return response.status(422)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};

const addProduct = async (request: Request, response: Response) => {
  const addedProduct = await productsService.addProduct(request.body);
  response.status(201).json(addedProduct);
};

const listAllProducts = async (_request: Request, response: Response) => {
  const products = await productsService.listAllProducts();
  response.status(200).json(products);
};

export {
  addProduct,
  listAllProducts,
  validaNomeProdutos,
  validaAmountProdutos,
};