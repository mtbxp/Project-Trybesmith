import * as ordersModel from '../models/ordersModel';
import { TOrder } from '../types';

export async function getAllOrdersS(): Promise<TOrder[]> {
  const result = await ordersModel.getAllOrders();
  return result;
}

export default getAllOrdersS;