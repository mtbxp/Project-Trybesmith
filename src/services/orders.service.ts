import ordersModel from '../models/orders.model';
import Order from '../types/Order';
import { verifyToken } from '../auth/jwt';

const getOrders = async (): Promise<Order[]> => {
  const orders = await ordersModel.getOrders();

  return orders;
};

const createOrder = async (token: string, productsIds: number[]) => {
  const user = verifyToken(token);
  let id;
  if (user) id = user.data.id;
  if (id) {
    await ordersModel.createOrder(id, productsIds);
    return { userId: id, productsIds };
  }
};

export default {
  getOrders,
  createOrder,
};