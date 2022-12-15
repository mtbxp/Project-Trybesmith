import orderModel from '../models/orders.model';

export default async function getAll() {
  const result = await orderModel();
  return result;
}
