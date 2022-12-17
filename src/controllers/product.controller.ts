import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  const getAll = await ProductService.getAllProducts();
  res.status(200).json(getAll);
};

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = req.body;

  const newProduct = await ProductService.createProduct(product);

  res.status(201).json(newProduct);
};

export default {
  createProduct,
  getAllProducts,
};