import ordersModels from '../models/orders.model';
import { Order } from '../interfaces/orders';

const getAllOrders = async (): Promise<Order[]> => {
  const product = await ordersModels.getAllOrders();
  return product;
};

export default {
  getAllOrders,
};