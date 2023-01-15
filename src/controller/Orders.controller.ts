import { Response, Request } from 'express';
import getAllOrders from '../services/Orders.services';

const orders = async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await getAllOrders();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default orders;