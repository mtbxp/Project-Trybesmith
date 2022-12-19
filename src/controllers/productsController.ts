import { Request, Response } from 'express';
import * as productsService from '../services/productsService';

export async function getAll(_req: Request, res: Response) {
  const products = await productsService.getAll();
  res.status(200).json(products);
}

export async function getAllOrders(_req: Request, res: Response) {
  const orders = await productsService.getAllOrders();
  res.status(200).json(orders);
}

export async function insertProduct(req: Request, res: Response) {
  const products = req.body;
  const result = await productsService.insertProduct(products);

  res.status(201).json(result);
}

export async function insertOrder(req: Request, res: Response) {
  const { productsIds } = req.body;
  const { id } = req.body.user;
  const result = await productsService.insertOrder(id, productsIds);

  res.status(201).json(result);
}