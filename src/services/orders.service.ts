import * as ordersModel from '../models/orders.model ';
import { AddOrder } from '../types';

const addOrder = async (userId: any, product: AddOrder) => {
  const insertId = await ordersModel.addOrder(userId, product);
  return insertId;
};

const listAllOrders = async () => {
  const products = await ordersModel.listAllOrders();
  return products;
};

export {
  listAllOrders,
  addOrder,
};