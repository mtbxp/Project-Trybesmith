import { Request, Response } from 'express';
import Joi from 'joi';

import * as productsService from '../services/products.service';

const createProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

async function createProduct(request: Request, response: Response): Promise<Response> {
  const { value, error } = createProductSchema.validate(request.body);

  if (error) {
    let status = 400;

    if (
      /must be a string/.test(error.message)
      || /length must be at least 3 characters long/.test(error.message)
    ) {
      status = 422;
    }

    return response.status(status).json({ message: error.message });
  }

  const product = await productsService.createProduct(value);

  return response.status(201).json(product);
}

async function getAllProducts(request: Request, response: Response): Promise<Response> {
  const products = await productsService.getAllProducts();

  return response.json(products);
}

export { createProduct, getAllProducts };
