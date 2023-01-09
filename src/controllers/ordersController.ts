import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  public orders = new OrdersService();

  getAllOrders = async (_req:Request, res:Response) => {
    const allOrders = await this.orders.getAllOrders();
    res.status(200).json(allOrders);
  };
}
