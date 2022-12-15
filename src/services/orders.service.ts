import * as OrdersModel from '../models/orders.model';
import { TOrders } from '../types';

export async function getAll():Promise<TOrders[]> {
  const orders = await OrdersModel.getAll();

  return orders;
}

export function create() {

}