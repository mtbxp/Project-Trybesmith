import { Response, Request } from 'express';
import getAllOrders from '../services/orderService';

const getOrders = async (req: Request, res: Response) => {
  const result = await getAllOrders();
  res.status(result.status).json(result.date);
};

export default getOrders;