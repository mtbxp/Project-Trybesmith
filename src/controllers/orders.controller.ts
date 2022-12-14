import { Request, Response } from 'express';

import * as ordersService from '../services/orders.service';

async function getAllOrders(request: Request, response: Response): Promise<Response> {
  const orders = await ordersService.getAllOrders();

  return response.json(orders);
}

export { getAllOrders };
