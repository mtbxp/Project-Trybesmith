import ordersModel from '../models/ordersModel';
import { Torders } from '../types';

const listOrders = async (): Promise<Torders[]> => {
  const allOrders = await ordersModel.listOrders();
  return allOrders;
};

export default { listOrders };
