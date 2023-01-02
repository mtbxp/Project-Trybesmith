import { Request, Response } from 'express';
import productsService from '../services/products.service';

export default {
  createProduct: async (req: Request, res: Response) => {
    const output = await productsService.createProduct(req.body);

    return res.status(201).json(output);
  },
};