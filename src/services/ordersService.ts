import * as ordersModel from '../models/ordersModel';
import { TOrder, TUser } from '../types';

export async function getAllOrdersS(): Promise<TOrder[]> {
  const result = await ordersModel.getAllOrders();
  return result;
}

export async function createOrderS(user: TUser, productsIds: number[]) {
  const result = await ordersModel.createOrder(user, productsIds);
  return result;
}
