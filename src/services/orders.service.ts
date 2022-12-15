import * as ordersModel from '../models/orders.model';
import { Order, OrderInput } from '../types';

async function createOrder({ productsIds, userId }: OrderInput): Promise<Omit<Order, 'id'>> {
  await ordersModel.createOrder({ productsIds, userId });

  return {
    userId,
    productsIds,
  };
}

async function getAllOrders(): Promise<Order[]> {
  return ordersModel.getAllOrders();
}

export { createOrder, getAllOrders };
