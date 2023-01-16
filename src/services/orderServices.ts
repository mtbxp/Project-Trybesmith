import orderModel from '../models/orderModel';
import { TOrder } from '../types';

const getAll = async (): Promise<TOrder[]> => {
  const order = await orderModel.getAll();
  return order;
};

export default {
  getAll,
};