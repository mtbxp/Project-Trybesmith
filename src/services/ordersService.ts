import ordersModel from '../models/ordersModel';
import { Torders } from '../types/types';

const getAllService = async (): Promise<Torders[]> => {
  const results = await ordersModel.getAllOrders();
  return results;
};

export default {
  getAllService,
};