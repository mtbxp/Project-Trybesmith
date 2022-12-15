import { Request, Response, NextFunction } from 'express';
import { TProduct } from '../types';
// import createProductService from '../service/products.service';
import productService from '../service/products.service';

const createProduct = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const product = request.body as TProduct;
    const newProduct = await productService.createProduct(product);
    return response.status(201).json(newProduct);
  } catch (error) {
    return next(error);
  }
};

const getAllProducts = async (_request: Request, response: Response, next: NextFunction) => {
  try {
    const productsList = await productService.getAllProducts();
    return response.status(200).json(productsList);
  } catch (error) {
    return next(error);
  }
};

export default { createProduct, getAllProducts };