import { Request, Response } from 'express';
import * as ProductService from '../services/product.service';
import { TProduct } from '../types';

export async function create(req: Request, res: Response) {
  try {
    const product = req.body as TProduct;
    const newProduct = await ProductService.create(product);

    return res.status(201).json(newProduct);
  } catch (err:unknown) {
    console.log(err);
  }
}

export async function getAll(_req: Request, res: Response) {
  try {
    const products = await ProductService.getAll();

    return res.status(200).json(products);
  } catch (err:unknown) {
    console.log(err);
  }
}