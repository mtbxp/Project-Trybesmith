import { Request, Response } from 'express';
import productsService from '../service/products.service';
import { TProducts } from '../type';

const createNewProductController = async (req: Request, res: Response) => {
  const newProduct = await productsService.insertNewProductService(req.body as TProducts);
  return res.status(201).json(newProduct);
};

export default { createNewProductController };