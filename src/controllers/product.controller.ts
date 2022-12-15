import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = req.body;
  
  if (!product) {
    res.status(400).json({ message: 'some fields are missing' });
  }

  const newProduct = await ProductService.createProduct(product);

  res.status(201).json(newProduct);
};

export default {
  createProduct,
};