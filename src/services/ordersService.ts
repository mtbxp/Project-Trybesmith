import ordersModel from '../models/ordersModel';
import { Order, Token } from '../types';
import { decodeToken } from '../middlewares/jwtToken';

const getAllOrders = async (): Promise<Order[]> => {
  const result = await ordersModel.getAllOrders();
  return result;
};

const createOrder = async (token: string, productsIds: number[]): Promise<Order> => {
  const decode = decodeToken(token);
  const { id } = decode as Token;
  const result = await ordersModel.createOrder(id as number, productsIds);
  return result;
};

export default {
  getAllOrders,
  createOrder,
};