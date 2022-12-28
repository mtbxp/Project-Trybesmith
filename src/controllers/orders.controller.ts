import { Request, Response } from 'express';
// import * as orderService from '../services/orders.service';
import orderService from '../services/orders.service';
import statusCodes from '../utils/statusCodes';

export default async function getAll(_req: Request, res: Response): Promise<Response> {
  const order = await orderService();
  
  return res.status(statusCodes.OK).json(order);
}
