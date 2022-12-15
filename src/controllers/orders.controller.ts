import { Request, Response } from 'express';
import ordersService from '../service/orders.service';

const getAllOrdersController = async (req: Request, res:Response) => {
  const getAllOrders = await ordersService.selectAllOrderService();
  return res.status(200).send(getAllOrders);
};

export default { getAllOrdersController };