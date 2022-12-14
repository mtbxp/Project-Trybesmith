import { Request, Response } from 'express';
import ProductsService from '../services/productsService';
import 'express-async-errors';
import statusCodes from '../statusCodes';
import { HttpError } from '../interfaces';

const productsService = new ProductsService();

export default class ProductsController {
  getAll = async (_req: Request, res: Response) => {
    try {
      const { status, data } = await productsService.getAll();
  
      res.status(status).json(data);
    } catch (error: unknown) {
      const { message } = error as HttpError;
      res.status(statusCodes.SERVER_ERROR).json(message);
    }
  };
}