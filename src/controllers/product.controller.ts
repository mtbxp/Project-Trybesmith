import { Request, Response } from 'express';
import productService from '../services/product.service';
import httpStatusCodes from '../httpStatusCodes';

const createProductController = async (req: Request, res: Response) => {
  const newProduct = await productService.createProductService(req.body);
  return res.status(httpStatusCodes.CREATED).json(newProduct);
};

const getAllProductController = async (req: Request, res: Response) => {
  const allProducts = await productService.getAllProductsService();
  return res.status(httpStatusCodes.OK).json(allProducts);
};

export default {
  createProductController,
  getAllProductController,
};
