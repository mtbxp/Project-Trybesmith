import { TOrder } from '../types';
import * as ordersModel from '../models/ordersModel';

export async function getAll(): Promise<TOrder[]> {
  const orders = await ordersModel.getAll();
  return orders;
}

export default getAll;