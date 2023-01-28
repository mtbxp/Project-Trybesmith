import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAllOrders = async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const { productsIds } = req.body;
    const { user } = req.headers;
    const result = await orderService.addOrder(productsIds, user as string);
    res.status(201).json(result.message);
  } catch (error) {
    res.status(500).json({ type: 'error', message: error });
  }
};

export default { getAllOrders, createOrder };