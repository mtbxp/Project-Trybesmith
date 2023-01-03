import ordersModel from '../models/orders.model';
import { Order } from '../types';

export default {
  getOrders: async (): Promise<Order[]> => {
    const orders = await ordersModel.findAll();

    return orders;
  },
};