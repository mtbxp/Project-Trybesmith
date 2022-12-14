import { Request, Response } from 'express';
import productService from '../services/product.service';
// import { TProduct } from '../models/interfaces/product';

const add = async (req: Request, res: Response) => {
  const productData = req.body;
  const newProduct = await productService.add(productData);
  return res.status(201).send(newProduct);
};

export default { add };