import { Request, Response } from 'express';
import statuses from '../utils/statuses';
import productsService from '../services/products.service';

const getAllProducts = async (_req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();
  res.status(statuses.SUCCESSFUL_STATUS).json(allProducts);
};

const createProduct = async (req: Request, res: Response) => {
  const results = await productsService.createProduct(req.body);
  res.status(statuses.SUCCESSFULLY_CREATED).json(results);
};

export default { getAllProducts, createProduct };
