import { Request, Response } from 'express';
import * as productService from '../service/productService';

// eslint-disable-next-line import/prefer-default-export
export async function createProduct(req:Request, res: Response) {
  const { status, insertId } = await productService.createProduct(req.body);
  res.status(status).json(insertId);
}