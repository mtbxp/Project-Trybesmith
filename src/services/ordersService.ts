import ordersModel from '../models/ordersModel';
import { Order } from '../types/Order';

const getAllOrders = async (): Promise<Order[]> => {
  const searchedOrders = await ordersModel.getAllOrders();
  return searchedOrders;
};

export default {
  getAllOrders,
};