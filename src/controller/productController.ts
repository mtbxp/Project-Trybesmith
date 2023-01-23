import { Request, Response } from 'express';
import * as productService from '../service/productService';

export async function createProduct(req:Request, res: Response) {
  const { status, insertId } = await productService.createProduct(req.body);
  res.status(status).json(insertId);
}

export async function getAllProd(_req:Request, res: Response) {
  const { status, data } = await productService.getAllProd();
  res.status(status).json(data);
}