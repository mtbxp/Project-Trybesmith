import ordersModel from '../models/modelOrders';

export default async function getAllOrders() {
  const orders = await ordersModel();

  return orders;
}