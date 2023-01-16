import ordersModel from '../models/orders.model';
import { TOrder } from '../types';

const getAll = async (): Promise<TOrder[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

export default { getAll };