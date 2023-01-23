import { Request, Response } from 'express';
import ordersService from '../service/ordersService';

async function getAllOrders(_req:Request, res: Response) {
  const { status, data } = await ordersService.getAllOrders();
  res.status(status).json(data);
}

export default {
  getAllOrders,
};