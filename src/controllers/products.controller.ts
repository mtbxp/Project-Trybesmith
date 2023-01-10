import { Request, Response } from 'express';
import productService from '../services/products.service';

export default {
  create: async (req: Request, res: Response) => {
    const result = await productService.create(req.body); 

    if (result.err) return res.status(result.err.statusCode).json(result.output);

    return res.status(201).json(result.output);
  },
};