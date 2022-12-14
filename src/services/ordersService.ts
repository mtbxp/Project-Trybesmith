import ordersModel from '../models/ordersModel';
import { Order } from '../interfaces/Product';

const getAllOrders = async (): Promise<Order[]> => {
  const orders: Order[] = await ordersModel.getAllOrders();
  return orders;
};

export default {
  getAllOrders,
};
