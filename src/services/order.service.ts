import { Orders } from '../interfaces/order.interface';
import orderModel from '../models/order.model';

const getAll = async (): Promise<Orders[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

export default { getAll };