import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
import { returnInfos } from '../auth/jwt';
import orderService from '../services/orderService';

const getAllOrders = async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const userInfos = returnInfos(authorization as string);
    const result = await orderService.addOrder(productsIds, userInfos.username as string);
    res.status(201).json(result.message);
  } catch (error) {
    res.status(500).json({ type: 'error', message: error });
  }
};

export default { getAllOrders, createOrder };