import ordersModel from '../models/orders.model';
import { Order, User } from '../types/types';

const getAll = async (): Promise<Order[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

const create = async (user: User, productsIds: number[]) => {
  const order = await ordersModel.create(user, productsIds);
  return order;
};

export default {
  getAll,
  create,
};