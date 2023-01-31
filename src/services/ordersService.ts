// import jwt from 'jsonwebtoken';
import ordersModel from '../models/ordersModel';
import { Order } from '../types/Order';
import { OrderData } from '../types/orderData';

const getAllOrders = async (): Promise<Order[]> => {
  const searchedOrders = await ordersModel.getAllOrders();
  return searchedOrders;
};

// const decodeToken = (token: string): object => {
//   const decode = jwt.decode(token);
//   return decode as object;
// };

const newOrder = async (order: OrderData): Promise<OrderData> => {
  // const decode = decodeToken(token);
  // const { id } = decode as Order;
  const ordersAdded = await ordersModel.newOrder(order);
  return ordersAdded;
};

export default {
  getAllOrders,
  newOrder,
};