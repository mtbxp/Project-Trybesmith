import { Response, Request } from 'express';
import * as productsService from '../services/products.service';

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
};