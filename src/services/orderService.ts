import { User } from '../types/index';
import { createOrder, getAllOrders } from '../models/orderModel';

export async function getAllOrder() {
  const orders = await getAllOrders();
  return orders;
}

export async function createOrders(user: User, productsIds: number[]) {
  const orders = await createOrder(user, productsIds);
  return orders;
} 
