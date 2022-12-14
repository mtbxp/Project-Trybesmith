import { Request, Response } from 'express';
import ProductsService from '../services/productService';
import statusCodes from '../statusCodes';
import { HttpError } from '../interfaces';
import 'express-async-errors';

const productsService = new ProductsService();

export default class ProductsController {
  getAll = async (_req: Request, res: Response) => {
    try {
      const { status, data } = await productsService.getAll();
  
      return res.status(status).json(data);
    } catch (error: unknown) {
      const { message } = error as HttpError;
      
      return res.status(statusCodes.SERVER_ERROR).json({ message });
    }
  };

  create = async (req: Request, res: Response) => {
    const product = req.body; 

    try {
      const { status, data } = await productsService.create(product);

      return res.status(status).json(data);
    } catch (error: unknown) {
      const { message } = error as HttpError;

      return res.status(statusCodes.SERVER_ERROR).json({ message });
    }
  };
}