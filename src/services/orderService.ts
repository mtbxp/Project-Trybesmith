import mo from '../models/orderModel';
import { Order } from '../types';

const getAllOrders = async (): Promise<Order[]> => {
  const users = await mo.getAllOrders();
  return users;
};

export default { getAllOrders };