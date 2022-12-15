import { Request, Response } from 'express';
/* import { TOrder } from '../types'; */
import { status } from '../statusCode/status';
import { getAllOrdersS } from '../services/ordersService';

export async function getAllOrdersC(_req: Request, res: Response) {
  const result = await getAllOrdersS();
  return res.status(status.OK).json(result);
}

export default getAllOrdersC;