import ordersModel from '../models/orders.model';
import Order from '../types/Order';

const getOrders = async (): Promise<Order[]> => {
  const orders = await ordersModel.getOrders();

  return orders;
};

export default {
  getOrders,
};