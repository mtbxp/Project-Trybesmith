import * as ordersModel from '../models/orders.model';
import { Order } from '../types';

async function getAllOrders(): Promise<Order[]> {
  return ordersModel.getAllOrders();
}

export { getAllOrders };
