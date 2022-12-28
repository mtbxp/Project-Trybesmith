import { Request, Response } from 'express';
import * as orderService from '../services/orders.service';
import statusCodes from '../utils/statusCodes';

// eslint-disable-next-line import/prefer-default-export
export async function getAll(_req: Request, res: Response): Promise<Response> {
  const order = await orderService.getAll();
  
  return res.status(statusCodes.OK).json(order);
}
