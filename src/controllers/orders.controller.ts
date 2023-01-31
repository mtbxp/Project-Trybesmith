import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getOrders();

  return res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const { productsIds } = req.body;

  if (token) {
    const orderCreated = await ordersService.createOrder(token, productsIds);
    return res.status(201).json(orderCreated);
  }
};

export default {
  getOrders,
  createOrder,
};
