import { OrdersResponse } from '../interfaces/orders.interfaces';
import model from '../models/orders.models';

export async function getOrders(): Promise<OrdersResponse[]> {
  const response = await model.getOrders();
  return response;
}

export async function post() {
  return null;
}