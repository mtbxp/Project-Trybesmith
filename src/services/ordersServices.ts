import ordersModel from '../models/ordersModel';
import Order from '../types/Order';

const getAllOrders = async (): Promise<Order[]> => {
  const payload = await ordersModel.getAllOrders();

  return payload;
};

export default {
  getAllOrders,
};