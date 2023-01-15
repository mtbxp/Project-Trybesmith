import * as ordersModel from '../models/orders.model';

export default async function getAllOrders() {
  const allOrders = await ordersModel.default();
  return { type: null, message: allOrders };
}