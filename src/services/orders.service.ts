import ordersModel from '../models/orders.model';
import { TLoggedUser, TOrders } from '../types';

const getAllOrders = async (): Promise<TOrders[]> => {
  const allOrders = await ordersModel.getAllOrders();
  return allOrders;
};

const createOrder = async (orderInfo: TLoggedUser) => {
  const result = await ordersModel.createOrder(orderInfo);
  return result;
};

export default { getAllOrders, createOrder };
