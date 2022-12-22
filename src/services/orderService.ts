import orderModel from '../models/orderModel';
import { Order } from '../helpers/types';

async function getAll(): Promise<Order[]> {
  const result = await orderModel.getAll();

  return result;
}

export default {
  getAll,
};
