import { Request, Response } from 'express';
import ordersGetAllService from '../services/orders.service';
import statusCodes from '../utils/statusCode';

const ordersGetAllController = async (_req: Request, res: Response) => {
  const result = await ordersGetAllService();

  res.status(statusCodes.OK).json(result);
};

export default ordersGetAllController;