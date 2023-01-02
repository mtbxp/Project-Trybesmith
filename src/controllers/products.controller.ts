import { Request, Response } from 'express';
import productsService from '../services/products.service';

export default {
  getProducts: async (_req: Request, res: Response): Promise<Response> => {
    const output = await productsService.getProducts();

    return res.status(200).json(output);
  },

  createProduct: async (req: Request, res: Response): Promise<Response> => {
    const output = await productsService.createProduct(req.body);

    return res.status(201).json(output);
  },
};