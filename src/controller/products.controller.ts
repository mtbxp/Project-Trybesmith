import { Request, Response } from 'express';
import { TProduct } from '../types';
import createProductService from '../service/products.service';

const createProduct = async (request: Request, response: Response) => {
  const product = request.body as TProduct;
  const newProduct = await createProductService(product);

  return response.status(201).json(newProduct);
};

export default createProduct;