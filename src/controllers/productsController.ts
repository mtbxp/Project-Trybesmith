import { Request, Response } from 'express';
import { TProduct } from '../types';
import { status } from '../statusCode/status';
import * as productsService from '../services/productsService';

export const insertProductC = async (req: Request, res: Response) => {
  const post = req.body as TProduct;
  const newProduct = await productsService.insertProductS(post);

  return res.status(status.CREATED).json(newProduct);
};

export const getAllProductC = async (_req: Request, res: Response) => {
  const posts = await productsService.getAllProductS();

  return res.status(status.OK).json(posts);
};