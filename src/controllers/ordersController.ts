import { Request, Response } from 'express';
/* import { TOrder } from '../types'; */
import { status } from '../statusCode/status';
import { createOrderS, getAllOrdersS } from '../services/ordersService';

export async function getAllOrdersC(_req: Request, res: Response) {
  const result = await getAllOrdersS();
  return res.status(status.OK).json(result);
}

export async function createOrdersC(req: Request, res: Response) {
  const { user, productsIds } = req.body;
  console.log(productsIds);
  const result = await createOrderS(user, productsIds);
  return res.status(status.CREATED).json(result);
}
