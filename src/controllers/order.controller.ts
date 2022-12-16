import { Request, Response } from 'express';
import getAllService from '../services/order.service';

export default async function getAll(req: Request, res: Response) {
  const result = await getAllService();
  res.status(200).json(result);
}