import { Request, Response, NextFunction } from 'express';
import { status } from '../utils/status';
import ordersService from '../service/orders.service';

const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await ordersService.getOrdersService();
    return res.status(status.OK).json(orders);
  } catch (error) {
    return next(error);
  }
};

export default { getAllOrders }; 