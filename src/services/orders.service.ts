import findOrders from '../models/orders.model';

export default async function getOrders() {
  const ordersList = await findOrders();
  return { status: '', message: ordersList };
}