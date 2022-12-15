import { IOrders } from '../interfaces/orders';
import getAll from '../models/orders.model';

export default async function getAllOrders(): Promise<IOrders[]> {
  const orders = await getAll();
  return orders as IOrders[];
}
