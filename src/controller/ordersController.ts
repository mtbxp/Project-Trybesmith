import { Request, Response } from 'express';
import * as ordersService from '../service/ordersService';

// eslint-disable-next-line import/prefer-default-export
export async function getAllOrders(_req:Request, res: Response) {
  const { status, data } = await ordersService.getAllOrders();
  res.status(status).json(data);
}