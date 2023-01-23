import * as Orders from '../models/ordersModel';

// eslint-disable-next-line import/prefer-default-export
export async function getAllOrders() {
  const data = await Orders.getAllOrders();
  return { status: 200, data };
}