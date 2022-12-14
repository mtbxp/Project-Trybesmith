import ordersModel from '../models/orders.model';
import { Order } from '../types/types';

const getAll = async (): Promise<Order[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

export default {
  getAll,
};