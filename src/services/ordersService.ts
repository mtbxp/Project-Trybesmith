import ordersModel from '../models/ordersModel';
import { Order } from '../types';

const getAllOrders = async (): Promise<Order[]> => {
  const result = await ordersModel.getAllOrders();
  return result;
};

export default {
  getAllOrders,
};