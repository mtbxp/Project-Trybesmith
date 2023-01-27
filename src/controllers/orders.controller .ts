import { Response, Request } from 'express';
import * as ordersService from '../services/orders.service';

const addProduct = async () => {};

const listAllOrders = async (_request: Request, response: Response) => {
  const orders = await ordersService.listAllOrders();
  response.status(200).json(orders);
};

export {
  addProduct,
  listAllOrders,
};