import { Request, Response } from 'express';
import orderService from '../services/orderService';
import statusCodes from '../helpers/statusCodes';

async function getAll(_req: Request, res: Response) {
  const result = await orderService.getAll();

  return res.status(statusCodes.OK).json(result);
}

export default {
  getAll,
};