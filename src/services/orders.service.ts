import ordersModel from '../models/orders.model';
import { NewOrder, Order } from '../types';

export default {
  getOrders: async (): Promise<Order[]> => {
    const orders = await ordersModel.findAll();

    return orders;
  },

  createOrder: async (userId: number, productsIds: number[]): Promise<NewOrder> => {
    await ordersModel.insert(userId, productsIds);

    return { userId, productsIds };
  },
};