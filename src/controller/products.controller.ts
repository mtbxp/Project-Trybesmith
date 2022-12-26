import { Request, Response, NextFunction } from 'express';
import { TProduct } from '../types';
// import createProductService from '../service/products.service';
import productService from '../service/products.service';

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body as TProduct;

  try {
    const newProduct = await productService.createProduct(product);
    return res.status(201).json(newProduct);
  } catch (error) {
    return next(error);
  }
};

const getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const productsList = await productService.getAllProducts();
    return res.status(200).json(productsList);
  } catch (error) {
    return next(error);
  }
};

export default { createProduct, getAllProducts };