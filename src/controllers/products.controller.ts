import { Request, Response } from 'express';
import productsService from '../services/products.service';
import IProducts from '../interfaces/products.interface';

const insertProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const productValues: IProducts = { name, amount };
  const product = await productsService.insertProduct(productValues);
  res.status(201).json(product);
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

export default {
  insertProduct,
  getAllProducts,
};