import { Request, Response } from 'express';
import ProductsService from '../services/productsService';
import 'express-async-errors';

const productsService = new ProductsService();

export default class ProductsController {
  getAll = async (_req: Request, res: Response) => {
    const { status, data } = await productsService.getAll();

    res.status(status).json(data);
  };
}