import { Request, Response, NextFunction } from 'express';
import { status } from '../utils/status';
import ordersService from '../service/orders.service';
import { TNewOrder } from '../types';

const getAllOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await ordersService.getOrdersService();
    return res.status(status.OK).json(orders);
  } catch (error) {
    return next(error);
  }
};

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user: { id: userId }, productsIds } = req.body;
    const newOrderRequest = { userId, productsIds } as TNewOrder;
    
    const orderCreated = await ordersService.createOrderService(newOrderRequest);
    return res.status(status.CREATED).json(orderCreated);
  } catch (error) {
    return next(error);
  }
};

export default { getAllOrders, createOrder }; 