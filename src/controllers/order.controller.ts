import { Request, Response } from 'express';
import { getAllService, insertOrderService } from '../services/order.service';

export async function getAll(req: Request, res: Response) {
  const result = await getAllService();
  res.status(200).json(result);
}

export async function insertOrder(req: Request, res: Response) {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  const { data } = req.body.user;
  await insertOrderService(data.id, productsIds);
  res.status(201).json({ userId: data.id, productsIds });
}