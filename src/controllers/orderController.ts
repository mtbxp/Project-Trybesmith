import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  public order = new OrderService();

  getAllOrders = async (_req:Request, res:Response) => {
    const orders = await this.order.getAllOrders();
    res.status(200).json(orders);
  };
}