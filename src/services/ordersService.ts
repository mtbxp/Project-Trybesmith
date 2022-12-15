import { TOrder } from '../types';
import * as ordersModel from '../models/ordersModel';

export async function getAll(): Promise<TOrder[]> {
  const orders = await ordersModel.getAll();
  return orders;
}

export async function insert(newOrder: TOrder): Promise<TOrder> {
  await ordersModel.insert(newOrder);
  console.log(newOrder);
  
  return newOrder;
}