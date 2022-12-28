import { Order } from '../interfaces/Order.interface';
import orderModel from '../models/order.model';

const getAll = async (): Promise<Order[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

export default { getAll };